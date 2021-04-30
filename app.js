const express = require('express');
const sequelize = require('./db/index');

const cors = require('cors');



const PORT = process.env.PORT || 3000;


const morgan = require('morgan');
const bodyParser = require('body-parser');

const teamRoutes = require('./api/routes/teams');
const conferenceRoutes = require('./api/routes/conferences');
const prospectRoutes = require('./api/routes/prospects');
const pickRoutes = require('./api/routes/Picks');
const needRoutes = require('./api/routes/TeamNeeds');
const draftRoutes = require('./api/routes/draft');
const roundRoutes = require('./api/routes/DraftRounds');
const positionRoutes = require('./api/routes/position');
const mockRoutes = require('./api/routes/mocks');
const mockSelectionRoutes = require('./api/routes/mockSelections');








const app = express();

app.use(cors({origin: true}));


async function assertDatabaseConnectionOk(){
	console.log(`Checking database connection...`);
	try {
		await sequelize.authenticate();
		console.log('Database connection OK!');
	} catch (error) {
		console.log('Unable to connect to the database:');
		console.log(error.message);
		process.exit(1);
	}
}


async function init(){
	await assertDatabaseConnectionOk();


	try{

		 

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
		app.use('/TeamNeeds', needRoutes);
		app.use('/drafts', draftRoutes);
		app.use('/rounds', roundRoutes);
		app.use('/positions', positionRoutes);
		app.use('/mocks', mockRoutes);
		app.use('/mockSelections', mockSelectionRoutes);

		
		


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
	} 
	catch(err) {
		console.error('Err Starting Express', err);
	};



	app.listen(PORT);
}



	
init();

	
module.exports = app;
