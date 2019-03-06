const { Pool } = require('pg');
const url = require('url');
require('dotenv').config();

let DB_URL = process.env.DB_URL_LOCAL;

const params = url.parse(DB_URL);
const [username, password] = params.auth.split(':');
const options = {
  host: params.hostname,
  port: params.port,
  user: username,
  password,
  database: params.path.split('/')[1],
  max: 2,
  ssl: params.hostname !== 'localhost',
};

module.exports = new Pool(options);
