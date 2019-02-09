const express = require('express');
const router = express.Router();
const loveController = require ('../controllers/love.controller.js');

router.post('/matcheaks/:id', loveController.handleMatch);

module.exports = router;