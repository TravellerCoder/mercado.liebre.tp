const express = require('express');
const renderHome = require('../controllers/mainController');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get('/', mainController.renderHome);

module.exports = router;