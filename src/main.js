const express = require('./app/express');
const path = require('path');
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
  res.sendFile(path.join(__dirname, `..`, 'public', 'html', 'index.html'));
});
main.all('*', (req, res) => {
  const response = {
    status: 'error',
    message: `Not Found`,
    error: [],
  };
  res
    .status(503)
    .sendFile(path.join(__dirname, `..`, 'public', 'html', '503.html'));
});
module.exports = main;
