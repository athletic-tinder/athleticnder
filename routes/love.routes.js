const express = require('express');
const router = express.Router();
const loveController = require ('../controllers/love.controller.js');

router.post('/adopta/:id', loveController.handleMatch);
router.get('/matches', loveController.list);

module.exports = router;