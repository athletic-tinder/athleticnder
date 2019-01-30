const express = require('express');
const router = express.Router();
const passport = require('passport');
const sessionsController = require('../controllers/sessions.controller.js');

router.post('/facebook', passport.authenticate('facebook-auth', { scope: ['email'] }));
router.get('/:provider/cb', sessionsController.createWithIDPCallback);
router.get('/',sessionsController.login);




// router.get('/match', 
//   secure.isAuthenticated, 
//   secure.isProfileCompleted, 
//   usersController.match);


// router.get('/match', sessionsController.createWithIDPCallback);

module.exports = router;
