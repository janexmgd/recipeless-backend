const express = require('../app/express');
const authController = require('../controller/auth.controller');
const authRouter = express.Router();
authRouter.post('/auth/register', authController.register);
// authRouter.post('/auth/login', authController.login);
// authRouter.get('/auth/verify-email', authController.verifyEmail);

module.exports = authRouter;
