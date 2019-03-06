exports.isEmail = (req, res, next) =>
  // TODO: CHECK IF EMAIL IS FOUND
  new Promise((resolve, reject) => { 
  if (true) {
      resolve({
        email: 'Ayman@gmail.com',
        password: '12345'
    });
      next();
    } else {
      reject({ error: 'not found' });
      next();
    }
});
