const express = require('express');
const router = express.Router();
const controllerAuth = require('./controller');

router.post('/auth/signin', controllerAuth.signin);
router.post('/auth/signup', controllerAuth.signup);

module.exports = router;