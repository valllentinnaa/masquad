const express = require('express');
const router = express.Router();
const multer = require('multer');
const checkAuth = require('../middleware/check-auth');

const ProductsController = require('../controllers/products');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    //reject
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        //accept
        cb(null, true);
    } else {
        cb(null, false);
    }

};

const upload = multer({
    storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});

const Product = require('../models/product');

router.get('/', ProductsController.productsGetAll);

router.post('/', checkAuth, upload.single('productImage'), ProductsController.productsCreate);

router.get('/:productId', ProductsController.productsGetProduct);

router.patch('/:productId', checkAuth, ProductsController.productsUpdateProduct);

router.delete('/:productId', checkAuth, ProductsController.productsDeleteProduct);

module.exports = router;