const express = require('express');
const router = express.Router();
const loveController = require ('../controllers/love.controller.js');

router.post('/adopta', loveController.handleMatch);
router.get('/matches', loveController.list);
router.get('/messages', loveController.messages);

module.exports = router;