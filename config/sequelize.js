module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: DB_DIALECT,
    logging: DB_LOG,
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: DB_DIALECT,
    logging: DB_LOG,
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: DB_DIALECT,
    logging: DB_LOG,
    pool: {
      max: DB_POOL_MAX,
      min: DB_POOL_MIN,
      acquire: DB_POOL_ACQUIRE,
      idle: DB_POOL_IDLE,
    },
  },
}
