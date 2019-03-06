const conn = require('../connection');

const getUser = (email) => new Promise((resolve, reject) => {
  conn.query('select * from users where email = $1', [email], (err, res) => {
    if (err) return reject(err);
    else return resolve(res.rows[0]);
  })
});

// getUser('aalqouqa@gmail.com').then((res) => console.log(res)).catch((err) => console.log(err))
module.exports = getUser;
