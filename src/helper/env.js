require('dotenv').config();
module.exports = {
  DATABASE_URL: process.env.DATABASE_URL,
  JWT_SECRET: process.env.JWT_SECRET,
  APP_PORT: process.env.APP_PORT,
  APP_URL: process.env.APP_URL,
  APP_NAME: process.env.APP_NAME,
  GMAIL_USER: process.env.GMAIL_USER,
  GMAIL_APP_PASS: process.env.GMAIL_APP_PASS,
  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT,
  DB_PASS: process.env.DB_PASS,
  DB_USER: process.env.DB_USER,
  DB_NAME: process.env.DB_USER,
};
