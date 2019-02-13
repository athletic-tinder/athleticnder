const express = require('express');
const router = express.Router();
const messageController = require ('../controllers/message.controller');

router.get('messages/:userId', messageController.getRoom);
// router.post('/messages/:userId', messageController.sendMessage);

module.exports = router;