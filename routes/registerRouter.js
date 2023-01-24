const express = require('express');const renderRegister =require('../controllers/registerController');
const router = express.Router();
const registerController = require('../controllers/registerController');
const path= require('path');
const fs = require('fs');
const multer = require('multer')

// CREAMOS LA CONSTANTE USERS PARA SU UTILIZACIÓN
const usersFilePath = path.resolve('./data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

router.get('/', registerController.controller.createUser);
router.post('/',registerController.controller.storeUser )

module.exports = router;
