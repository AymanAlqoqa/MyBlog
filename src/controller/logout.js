exports.logout = (req, res, next) => {
  res.clearCookie('jwt');
  next();
};
