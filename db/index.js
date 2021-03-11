const { Sequelize } = require('sequelize');
const { applyExtraSetup } = require('./extraSetup');



// In a real app, you should keep the database connection URL as an environment variable.
// But for this example, we will just use a local SQLite database.
// const sequelize = new Sequelize(process.env.DB_CONNECTION_URL);
const sequelize = new Sequelize(
	process.env.DB_NAME || 'UMM',
	process.env.DB_USER || 'root',
	process.env.DB_PASSWORD || '',
	{
		dialect: process.env.DB_DIALECT || "sqlite",
		storage: process.env.DB_STORAGE ||  'UMM.sqlite',
		logQueryParameters: true,
		benchmark: true
	}
);



const modelDefiners = [
	//require('./models/user.model'),
	//require('./models/instrument.model'),
	//require('./models/orchestra.model'),
	// Add more models here...
	// require('./models/item'),

	require('../api/models/College'),
	require('../api/models/conference'),
	require('../api/models/draft'),
	require('../api/models/mock'),
	require('../api/models/mockSelection'),
	require('../api/models/NFLConference'),
	require('../api/models/NFLDivision'),
	require('../api/models/pick'),
	require('../api/models/position'),
	require('../api/models/prospect'),
	require('../api/models/round'),
	require('../api/models/school'),
	require('../api/models/team'),
	require('../api/models/teamNeed'),
	require('../api/models/Unit'),


];

// We define all models according to their files as listed in the array created above 
//basically we call each FUNCTION definition in each of the files listed above and we pass in sequelize as required.
//open one of the model files to see what I mean by this......
for (const modelDefiner of modelDefiners) {
	modelDefiner(sequelize);
}

// We execute any extra setup after the models are defined, such as adding associations.
applyExtraSetup(sequelize);



// We export the sequelize connection instance to be used around our app.
module.exports = sequelize;