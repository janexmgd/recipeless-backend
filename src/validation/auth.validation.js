const Joi = require('joi');

const authValidation = {
  RegisterValidation: Joi.object({
    name: Joi.string()
      .max(100)
      .regex(/^[A-Za-z ]+$/)
      .required()
      .messages({
        'string.pattern.base': '"name" only letter allowed',
      }),
    email: Joi.string().max(50).email().required(),
    phone: Joi.string()
      .pattern(/^[0-9]+$/)
      .min(10)
      .max(16)
      .required()
      .messages({
        'string.pattern.base': '"phone" only number allowed',
      }),
    password: Joi.string()
      .min(8)
      .max(45)
      .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/)
      .required()
      .messages({
        'string.pattern.base':
          '"Password" must include one lowercase character, one uppercase character, a number, and a special character',
      }),
  }),
  LoginValidation: Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
  }),
};
module.exports = authValidation;
