exports.client = (req, res, next) => {
  res.status(404).render('error',
    {
      layout: 'error',
      statusCode: 404,
      errorMessage: 'Page Not Found!',
    });
    next();
};

exports.server = (err, req, res, next) => {
  res.status(500).render('error',
    {
      layout: 'error',
      statusCode: 500,
      errorMessage: err,
    });
    next();
};
