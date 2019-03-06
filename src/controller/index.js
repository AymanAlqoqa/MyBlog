const router = require('express').Router();
const { auth } = require('./utils/auth');

const home = require('./home');
const login = require('./login');
const { logout } = require('./logout');
const signup = require('./signup');

router.get('/login', login.get);
router.post('/login', login.post);
router.get('/', auth, home.get);
router.get('/logout', logout, login.get);
router.get('/signup', signup.get);

module.exports = router;
