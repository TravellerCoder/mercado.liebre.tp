const express = require('express');
const path = require('path');
const fs = require('fs');
const router = express.Router();
const loginController = require('../controllers/loginController');


//const usersFilePath = path.resolve('./data/users.json');
//const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));


router.get('/', loginController.renderLogin);

module.exports = router;
