const knex = require('knex');


const config = {
  client: 'mssql',
  connection: {
    user: 'general',
    password: '12345678',
    server: 'localhost',
    database: 'DBCoiffeur',
    options: {
      encrypt: false 
    }
  }
};


const db = knex(config);
module.exports = db;
