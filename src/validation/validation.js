const { failed } = require('../helper/response');
const validate = async (schema, req, res) => {
  try {
    const options = {
      errors: {
        wrap: {
          label: '',
        },
        language: {
          key: '{{key}} ',
        },
      },
    };
    const result = schema.validate(req, options);
    if (result.error) {
      // return console.log(result.error.details[0])
      throw result.error;
      // return console.log('validate')
    } else {
      return result.value;
    }
  } catch (error) {
    // return console.log(res)
    const { details } = error;
    // console.log(details[0].message)
    const messageError = details[0].message;
    // return
    // const messageError = details.map((i) => i.message).join(',')
    // return messageError
    return failed(res, {
      code: 400,
      status: 'failed',
      message: 'failed in validation',
      error: messageError,
    });
  }
};
module.exports = validate;
