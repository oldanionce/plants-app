const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');

router.get('/logout', authController.logout);
router.post('/login', authController.login);
router.post('/register', authController.register);
router.get('/getUser', authController.getUser);

module.exports = router;
