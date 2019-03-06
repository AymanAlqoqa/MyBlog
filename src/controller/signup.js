exports.get = (req, res) => {
  if (!req.cookies.jwt || !req.cookies.jwt) {
    res.render('signup', { page: 'login' });
  } else {
    res.redirect('/');
  }
};
