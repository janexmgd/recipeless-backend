const express = require('express');
const xssClean = require('xss-clean');
const cors = require('cors');
const helmet = require('helmet');
// const router
const web = express();

web.use(cors());
web.use(helmet());
web.use(xssClean());
web.use(express.json());
web.use(express.static('public'));

web.get('/', (req, res) => {
  res.json('wellcome to my rest api');
});
module.exports = web;
