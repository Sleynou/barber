<<<<<<< HEAD
const knex = require('knex');


const config = {
  client: 'sqlite3',
  connection: {
    filename: '../dbCoiffeur.sqlite3'
  },
  useNullAsDefault: true
};


const db = knex(config);
module.exports = db;
=======
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
>>>>>>> d75c357efa16d55ef0fd38f3faf8568396aacfc4
