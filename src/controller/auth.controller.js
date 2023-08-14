const authModel = require('../model/auth.model');
const {
  RegisterValidation,
  LoginValidation,
} = require('../validation/auth.validation');
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const validate = require('../validation/validation');
const { sendConfirmationEmail } = require('../helper/sendEmail');
const { success, failed } = require('../helper/response');
const { v4: uuidv4 } = require('uuid');

module.exports = {
  register: async (req, res, next) => {
    try {
      const { name, email, phone, password } = req.body;
      await validate(RegisterValidation, req.body, res);
      //   const test = await authModel.delete('email', email);
      //   return console.log(test);
      const findUserByEmail = await authModel.findBy('email', email);
      //   return console.log(findUserByEmail);
      if (findUserByEmail.rowCount > 0) {
        throw {
          customErr: failed(res, {
            code: 400,
            status: 'error',
            message: 'email is already registered',
            error: [],
          }),
        };
      }
      const id = uuidv4();
      const level = 1;
      const isActive = false;
      const photo = req.file ? req.file.filename : '';
      const verifyToken = crypto.randomBytes(16).toString('hex');
      const passwordHashed = await bcrypt.hash(password, 10);
      const isVerified = false;
      const data = {
        id,
        name,
        email,
        phone,
        passwordHashed,
        level,
        isActive,
        photo,
        verifyToken,
        isVerified,
      };
      await authModel.register(data);
      await sendConfirmationEmail(email, verifyToken, name);
      success(res, {
        code: 200,
        status: 'success',
        message: 'Register success',
        data: data,
      });
    } catch (error) {
      if (error.customErr) {
        return error.customErr;
      }
      return failed(res, {
        code: 500,
        status: 'error' || 'failed',
        message: error.message || 'internal server error',
      });
    }
  },
};
