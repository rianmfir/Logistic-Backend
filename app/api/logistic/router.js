const express = require('express');
const router = express.Router();
const { auth } = require('../../middlewares/auth');
const controller = require('./controller');

router.get('/logistic', controller.getAllLogistic);
router.post('/logistic', auth, controller.createLogistic);
router.put('/logistic/:id', auth, controller.updateLogistic);
router.delete('/logistic/:id', auth, controller.deleteLogistic);

module.exports = router;

