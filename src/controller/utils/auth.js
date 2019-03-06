const { verify } = require('jsonwebtoken');
const error = require('../error');

exports.auth = (req, res, next) => {
  if (req.cookies.jwt && req.cookies.jwt) {
    const { jwt } = req.cookies;
    verify(jwt, process.env.SECRET, (err, jwtInfo) => {
      if (err) {
        res.clearCookie('jwt');
        next();
      } else {
        req.token = jwtInfo;
        next();
      }
    });
  } else {
    res.redirect('/login');
  }
};
