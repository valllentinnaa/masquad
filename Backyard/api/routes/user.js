const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

const UserController = require('../controllers/user');

router.post('/signup', checkAuth, UserController.userSignUp);

router.post('/login', checkAuth, UserController.userLogin);

router.delete('/:userId', checkAuth, UserController.deleteUser);

module.exports = router;