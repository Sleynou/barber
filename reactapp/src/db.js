const knex = require('knex');


const config = {
  client: 'mssql',
  connection: {
    user: 'general',
    password: '123',
    server: 'localhost',
    database: 'SalonCoiffure',
    options: {
      encrypt: false 
    }
  }
};


const db = knex(config);
module.exports = db;