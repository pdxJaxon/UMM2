const express = require('express');

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




const db = require('./api/db');
const Seed = require('./db/seeders/index');

const app = express();


function dropConstraints(database) {
    //this is a hack for dev only!
    //todo: check status of posted github issue, https://github.com/sequelize/sequelize/issues/7606
    const queryInterface = database.getQueryInterface();
    return queryInterface.showAllTables()
    .then(tableNames => {

        return Promise.all(tableNames.map(tableName => {
        	console.log("ZAP " + tableName)
            return queryInterface.showConstraint(tableName)
            .then(constraints => {
                return Promise.all(constraints.map(constraint => {
                    console.log("ZAP " + tableName + ":" + constraint.constraintName)
                    return queryInterface.removeConstraint(tableName, constraint.constraintName);
                    
                }));
            });
        }));
    })
    
}


function dropTables(database) {
    //this is a hack for dev only!
    //todo: check status of posted github issue, https://github.com/sequelize/sequelize/issues/7606
    const queryInterface = database.getQueryInterface();
    return queryInterface.dropAllTables();
    console.log("All Tables Dropped");
    
}

db.connection.authenticate().then(async () => {
	console.log('Connection has been established successfully.');

	try {

		 dropTables(db.connection);

		 db.connection.sync({force:true}).then(() => {
			return Seed();
			});


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
		app.use('/position', positionRoutes);

		
		


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
