const express = require('express');
const productsController = require('../controllers/productsController');
const router = express.Router();
const multer = require('multer');
const path = require('path')

const storage = multer.diskStorage({
    destination : function(req, file, cb){
        cb(null, path.resolve('/public/images'))
    },
    filename : function(req, file, cb){
        const uniqueSuffix = Date.now();
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})


router.get('/products', productsController.controller.renderProducts);

module.exports = router;
