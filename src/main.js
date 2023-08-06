const express = require('./app/express');
const xssClean = require('xss-clean');
const cors = require('cors');
const helmet = require('helmet');
const router = require('./router/index');
const main = express();

main.use(cors());
main.use(helmet());
main.use(xssClean());
main.use(express.json());
main.use(express.static('public'));
main.use(router);

main.get('/', (req, res) => {
  res.json('wellcome to my rest api');
});
module.exports = main;
