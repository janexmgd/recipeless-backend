const nodemailer = require('nodemailer');
const handlebars = require('nodemailer-express-handlebars');
const path = require('path');
const {
  GMAIL_APP_PASS,
  GMAIL_USER,
  APP_URL,
  APP_NAME,
} = require('../helper/env');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  secureConnection: false, // TLS requires secureConnection to be false
  auth: {
    user: GMAIL_USER,
    pass: GMAIL_APP_PASS,
  },
  tls: {
    ciphers: 'SSLv3',
  },
});
module.exports = {
  sendConfirmationEmail: (email, confirmationCode, name) => {
    transporter.use(
      'compile',
      handlebars({
        viewEngine: {
          extname: '.html',
          partialsDir: path.resolve('./src/template/email'),
          defaultLayout: false,
        },
        viewPath: path.resolve('./src/template/email'),
        extName: '.html',
      })
    );
    const mailOptions = {
      from: `${APP_NAME} <admin@${APP_NAME}>`,
      to: email,
      subject: 'Please Confirm Your Account',
      text: `Confirm Your ${APP_NAME} account`,
      template: 'email-confirmation',
      context: {
        APP_URL: `${APP_URL}/apiv1/auth/verify-email?token=${confirmationCode}`,
        name: `${name}`,
      },
    };

    transporter.sendMail(mailOptions, (err, res) => {
      if (err) {
        console.log(err);
      } else {
        console.log(res);
      }
    });
  },
};
