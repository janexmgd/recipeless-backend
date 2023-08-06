require('dotenv').config();
module.exports = {
  DATABASE_URL: process.env.DATABASE_URL,
  JWT_SECRET: process.env.JWT_SECRET,
  APP_PORT: process.env.APP_PORT,
  APP_URL: process.env.APP_URL,
  APP_NAME: process.env.APP_NAME,
  GMAIL_USER: process.env.GMAIL_USER,
  GMAIL_APP_PASS: process.env.GMAIL_APP_PASS,
};
