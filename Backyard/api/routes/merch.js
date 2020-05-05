const express = require('express');
const router = express.Router();
const multer = require('multer');
const checkAuth = require('../middleware/check-auth');

const MerchController = require('../controllers/merch');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
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

router.get('/', MerchController.merchGetAll);

router.post('/', upload.single('merchImage'), MerchController.merchCreate);

router.get('/:merchId', MerchController.getMerch);

router.delete('/:merchId', MerchController.deleteMerch);

module.exports = router;