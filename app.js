const express = require('express');

const morgan = require('morgan');
const bodyParser = require('body-parser');

// const prospectRoutes = require('./api/routes/prospects');
const teamRoutes = require('./api/routes/Teams');
// const collegeRoutes = require('./api/routes/colleges');
// const draftRoutes = require('./api/routes/draft');
// const teamNeedRoutes = require('./api/routes/TeamNeeds');
// const draftRoundRoutes = require('./api/routes/DraftRounds');
// const pickRoutes = require('./api/routes/Picks');

const db = require('./api/db');

const app = express();
db.connection.authenticate()
	.then(console.log('Connection has been established successfully.'))
	.catch(err => {
	  console.error('Unable to connect to the database:', err);
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

// app.use('/prospects',prospectRoutes);
app.use('/teams',teamRoutes);
// app.use('/colleges',collegeRoutes);
// app.use('/draft',draftRoutes);
// app.use('/teamNeeds',teamNeedRoutes);
// app.use('/draftRounds',draftRoundRoutes);
// app.use('/picks',pickRoutes);

app.use((req, resp, next) => {
	const error = new Error('NOT FOUND: ' + req.path);
	error.status= 404;
	next(error);
})

app.use((error, req, resp, next) => {
	resp.status(error.status || 500);
	resp.json({
		error: {
			message: error.message
		}
	})
});

module.exports = app;
