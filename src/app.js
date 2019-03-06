const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const controller = require('./controller');
const error = require('./controller/error');
const favicon = require('serve-favicon');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine(
  'hbs',
  exphbs({
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials'),
    defaultLayout: 'main',
  }),
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(favicon(path.join(__dirname, '..', 'public', 'favicon.ico')));
app.use(controller);
app.use(error.client);
app.use(error.server);

module.exports = app;
