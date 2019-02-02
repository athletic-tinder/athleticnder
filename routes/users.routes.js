const express = require('express');
const router = express.Router();
const usersController = require ('../controllers/users.controller.js');
const secure = require('../middlewares/auth.middleware');

router.get('/profile', usersController.profile);
router.get('/profile/edit', usersController.edit);
router.post('/profile/edit', usersController.doEdit);
router.get('/matcheaks', secure.isAuthenticated, secure.isProfileCompleted, usersController.list);
router.post('/matcheaks', usersController.list);

module.exports = router;
