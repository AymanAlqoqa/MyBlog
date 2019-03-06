const conn = require('./connection');
const fs = require('fs');
const path = require('path');

const sql = fs.readFileSync(path.join(__dirname,'db_build.sql')).toString();
const dbRunBuild = (cb) => {
  conn.query(sql, (error, result) => {
    if (error) return cb(error);
    return cb(null, result);
  });
};
dbRunBuild((err, res) => {
  if (err) console.log({error: err});
  else console.log('Tables is created Successfully');
  
  
});
module.exports = dbRunBuild;
