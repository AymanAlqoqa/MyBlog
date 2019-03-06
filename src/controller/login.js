const getUser = require('../database/queries/getUser');
const { sign } = require('jsonwebtoken');
const bcrypt = require('bcrypt');


exports.get = (req, res) => {
  if (!req.cookies.jwt || !req.cookies.jwt) {
    res.render('login', {page: 'signup'});
  } else {
    res.redirect('/');
  }
};

exports.post = (request, response, next) => {
  const {email} = request.body;
  const {password} = request.body;

  if (email && password) {
    getUser(email).then((res) => {
      if (!res) {
        response.render('login', {msg: 'user not found'});
      } else {
        const user = {
          user_id: res.id,
          email: res.email,
          name: `${res.first_name} ${res.last_name}`,
        };
        const cookie = sign(user, process.env.SECRET);
        bcrypt.compare(password, res.password, (err, res) => {
          if (err) {
            return new TypeError('Error');
          };
          if (res === false) {
            response.render('login', {msg: 'password is wrong!'});
          } else {
            response.cookie('jwt', cookie, { httpOnly: true });
            response.redirect('/');
          }
        });
      }
    })
      .catch(err => next(err));
  }
};
