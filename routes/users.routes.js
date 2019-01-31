const express = require('express');
const router = express.Router();
const usersController = require ('../controllers/users.controller.js');


router.get('/profile', usersController.profile);
router.get('/profile/edit', usersController.edit);
// router.get('/profile', secure.isAuthenticated, usersController.profile);
// router.post('/profile', secure.isAuthenticated, usersController.doProfile);

module.exports = router;
