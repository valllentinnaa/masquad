const express = require('express');
const router = express.Router();
const multer = require('multer');
const checkAuth = require('../middleware/check-auth');

const ArticlesController = require('../controllers/articles');

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

router.get('/', ArticlesController.articlesGetAll);

router.post('/', ArticlesController.createArticle);

router.get('/:articleId', ArticlesController.getArticle);

//TODO: not working
router.put('/:articleId', ArticlesController.updateArticle);

router.delete('/:articleId', ArticlesController.deleteArticle);

module.exports = router;