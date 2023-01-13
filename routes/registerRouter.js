const express = require('express');
const renderRegister =require('../controllers/registerController');
const router = express.Router();
const registerController = require('../controllers/registerController');

router.get('/register', registerController.renderRegister);

module.exports = router;
