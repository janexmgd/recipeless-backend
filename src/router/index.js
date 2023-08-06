// api v1
const express = require('../app/express');
const authRouter = require('./auth.route');
const routerv1 = express.Router();
routerv1.get('/apiv1', (req, res) => {
  res.json('wellcome to my rest api v1');
});
routerv1.use('/apiv1/', authRouter);

module.exports = routerv1;
