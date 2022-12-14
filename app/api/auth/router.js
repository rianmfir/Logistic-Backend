const express = require('express');
const router = express.Router();
const controllerAuth = require('./controller');
const { auth } = require('../../middlewares/auth');

router.post('/auth/signin', controllerAuth.signin);
router.post('/auth/signup', controllerAuth.signup);

router.get('/auth/me', auth, controllerAuth.me);

module.exports = router;