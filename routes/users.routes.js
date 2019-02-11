const express = require('express');
const router = express.Router();
const usersController = require ('../controllers/users.controller.js');
const secure = require('../middlewares/auth.middleware');

router.get('/profile/index', usersController.profile);
router.get('/profile/edit', usersController.edit);
router.post('/profile/edit', usersController.doEdit);
router.get('/adopta', secure.isAuthenticated, secure.isProfileCompleted, usersController.list);
router.post('/adopta', usersController.list);


module.exports = router;
