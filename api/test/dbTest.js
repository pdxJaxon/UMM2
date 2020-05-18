require('dotenv').config();
const db = require('../db.js');
const { expect } = require('chai');

describe('db', () => {
  describe('connection', () => {
    const originalEnv = {};

    beforeEach(() => {
      Object.assign(originalEnv, process.env);
    });

    afterEach(() => {
      Object.assign(process.env, originalEnv);
    });

    describe('configuration settings', () => {
      process.env.DB_NAME = 'fredsDb';
      process.env.DB_USER = 'fred_the_admin';
      process.env.DB_PASS = 'freds-secret-password';
      process.env.DB_HOST = 'freds.machine';

      it('creates connection with environment variables', () => {
        const conn = db.connection;
        expect(conn.database).to.equal('fredsDb');
        expect(conn.username).to.equal('fred_the_admin');
        expect(conn.password).to.equal('freds-secret-password');
        expect(conn.host).to.equal('freds.machine');
        /*
        conn.config:
        database: undefined
        dialectModule: null
        dialectModulePath: null
        dialectOptions: {}
        host: "umm.db"
        keepDefaultTimezone: undefined
        native: false
        password: null
        pool: {}
        port: undefined
        protocol: "tcp"
        replication: false
        ssl: undefined
        username: undefined
        */
      });
    })

    describe('when configured specifies invalid dialect', () => {
      it('assumes dialect is sqlite', () => {
        process.env.DB_DIALECT = 'foobar';
        const conn = db.connection;
        expect(conn.dialect.name).to.equal('sqlite');
      });
    });
  });
});
