const express = require('express');
const renderLogin = require('../controllers/loginController');
const router = express.Router();
const loginController = require('../controllers/loginController');

router.get('/login', loginController.renderLogin);

module.exports = router;
