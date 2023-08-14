const { Pool } = require('pg');
const {
  DB_HOST,
  DB_NAME,
  DB_PASS,
  DB_PORT,
  DB_USER,
} = require('../helper/env');
const db = new Pool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
  port: DB_PORT,
  ssl: {
    rejectUnauthorized: false,
  },
});
console.log(DB_NAME);
db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('DB CONNECTED999');
  }
});
module.exports = db;
