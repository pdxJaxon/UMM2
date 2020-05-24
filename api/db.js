const { Sequelize } = require('sequelize');

exports.DEFAULT_DB_NAME = 'umm2_test';

const buildOptions = () => {
  const options = {
    dialect: process.env.DB_DIALECT || "sqlite",
  }
  if (process.env.DB_STORAGE) {
    options.storage = process.env.DB_STORAGE
  }
  return options;
}

const dbConn = () => {
  conn = new Sequelize(
    process.env.DB_NAME || exports.DEFAULT_DB_NAME,
    process.env.DB_USER || 'root',
    process.env.DB_PASSWORD || '',
    buildOptions()
  );

  return conn;
};

exports.connection = dbConn();
