const express = require('express');
const renderLogin = require('../controllers/productsController');
const router = express.Router();
const loginController = require('../controllers/productsController');

router.get('/products', loginController.renderProducts);

module.exports = router;
