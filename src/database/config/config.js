require('dotenv').config();

module.exports = {
  "development": {
    "host": "127.0.0.1",
    "username": "root",
    "database": "asyouwant",
    "password": null,
    "port":3306,
    "dialect": "mysql",
    "operatorsAliases": 0,
  },
  "production": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": "mysql",
    "operatorsAliases": 0
  }
};
  // "test": {
  //   "username": "root",
  //   "password": null,
  //   "database": "database_test",
  //   "host": "127.0.0.1",
  //   "dialect": "mysql"
  // },


