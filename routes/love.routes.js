const express = require('express');
const router = express.Router();
const loveController = require ('../controllers/love.controller.js');
const secure = require('../middlewares/auth.middleware');

router.get('/adopta', secure.isAuthenticated, secure.isProfileCompleted, loveController.adopta);
router.post('/adopta/:id', secure.isAuthenticated, secure.isProfileCompleted, loveController.handleMatch);
router.get('/matches', secure.isAuthenticated, secure.isProfileCompleted, loveController.list);
router.get('/messages', secure.isAuthenticated, secure.isProfileCompleted, loveController.messages);

module.exports = router;