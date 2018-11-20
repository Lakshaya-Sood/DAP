const pgp = require('pg-promise')({});
const USER_DB = process.env.USER_DB;
const PASSWORD_DB = process.env.PASSWORD_DB;
const DB = process.env.DB;
const HOST_DB = process.env.HOST_DB;
const PORT_DB = process.env.PORT_DB;

const DB_CONNECT_CONFIG = {
  user: USER_DB,
  host: HOST_DB,
  database: DB,
  password: PASSWORD_DB,
  port: PORT_DB,
  poolSize: 10
};


const db = pgp(DB_CONNECT_CONFIG);

module.exports = db;
