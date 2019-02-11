const express = require('express');
const router = express.Router();
const passport = require('passport');
const sessionsController = require('../controllers/sessions.controller.js');
const secure = require('../middlewares/auth.middleware');

router.post('/facebook', passport.authenticate('facebook-auth', { scope: ['email'] }));
router.get('/:provider/cb', sessionsController.createWithIDPCallback);
router.get('/', secure.nonAuthenticated, sessionsController.login);
router.get('/logout', sessionsController.delete);

module.exports = router;
