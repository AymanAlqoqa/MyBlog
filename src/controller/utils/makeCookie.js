const JWT = require('jsonwebtoken');

exports.makeCookie = (req, res, data) => {
  const payload = {
    email: data.email,
    userId: data.id
  }
  console.log(payload);
  
  
}