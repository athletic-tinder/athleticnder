const express = require('express');
const router = express.Router();
const messageController = require ('../controllers/message.controller');

router.get('/:id', messageController.getRoom);
router.post('/:id', messageController.sendMessage);

module.exports = router;