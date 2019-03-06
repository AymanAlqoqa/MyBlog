const bcrypt = require('bcrypt');
exports.checkPassword = (password, hashed) => {
  return bcrypt.compare(password, hashed);
}
