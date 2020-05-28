require('dotenv').config({path: "../../.env.test"});
const db = require('../db.js');
const { expect } = require('chai');

describe('db', () => {
  describe('connection', () => {
    it('creates connection valid connection', (done) => {
      db.connection.authenticate().
        then(() => {
          expect(conn.getDatabaseName()).to.equal(db.DEFAULT_DB_NAME);
          done();
        }).
        catch(err => {
          expect.fail(`Did not connect due to ${err}`);
          done();
        });
    });
  });
});
