const express = require('express');

const morgan = require('morgan');
const bodyParser = require('body-parser');

const teamRoutes = require('./api/routes/teams');
const conferenceRoutes = require('./api/routes/conferences');
const prospectRoutes = require('./api/routes/prospects');
const pickRoutes = require('./api/routes/Picks');


const db = require('./api/db');
const Seed = require('./db/seeders/index');

const app = express();

db.connection.authenticate().then(async () => {
	console.log('Connection has been established successfully.');

	try {
		await db.connection.sync({force:true}).then(() => {
			return Seed();
			});
		

		console.log("Synced", db.connection.getDatabaseName());

		//middleware
		app.use(morgan('dev'));

		app.use(bodyParser.urlencoded({extended: false}));
		app.use(bodyParser.json());
		app.use(bodyParser.raw());
		app.use(bodyParser.text());

		app.use((req, resp, next) => {
			resp.header('Access-Control-Allow-Origin','*');
			resp.header('Access-Control-Allow-Headers','*');

			if(req.method === 'OPTIONS'){
				resp.header('Access-Control-Allow-Method','PUT, POST,PATCH,DELETE,GET');
				return resp.status(200).json({});
			}
			next();
		});

		//routes
		app.use('/teams', teamRoutes);
		app.use('/conferences', conferenceRoutes);
		app.use('/prospects', prospectRoutes);
		app.use('/Picks', pickRoutes);
		


		//root
		app.use('/',(req,res,next) => {
			res.send("goody");
		})


		//unknown route
		app.use((req, res, next) => {
			const error = new Error('NOT FOUND: ' + req.path);
			error.status= 404;
			next(error);
		})

		app.use((error, req, res, next) => {
			res.status(error.status || 500);
			res.json({
				error: {
					message: error.message
				}
			})
		});
	} catch(err) {
		console.error('Could not sync database tables:', err);
	};
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});

module.exports = app;
