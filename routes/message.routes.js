const express = require('express');
const router = express.Router();
const messageController = require ('../controllers/message.controller');

router.get('/messages/:userId', messageController.list);
router.post('/messages/:userId', messageController.list);

module.exports = router;