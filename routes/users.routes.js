const express = require('express');
const router = express.Router();
const usersController = require ('../controllers/users.controller.js');

router.get('/profile/index', usersController.profile);
router.get('/profile/edit', usersController.edit);
router.post('/profile/edit', usersController.doEdit);


module.exports = router;
