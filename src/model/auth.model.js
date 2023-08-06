const db = require('../config/db');
const authModel = {
  findBy: (field, value) => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM users WHERE ${field}='${value}'`,
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
    });
  },
  register: (data) => {
    return new Promise((resolve, reject) => {
      const {
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
      } = data;
      db.query(
        `
      INSERT INTO users(id,name,email,phone,password,level,
      is_active,photo,verify_token,is_verified)
      VALUES
      ('${id}','${name}','${email}','${phone}','${passwordHashed}','${level}',
      ${isActive},'${photo}','${verifyToken}',${isVerified}
      )
      `,
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
    });
  },
};
module.exports = authModel;
