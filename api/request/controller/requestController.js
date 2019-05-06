const express = require('express')
const router = express.Router();
const requestService = require('../service/requestService');
const chatService = require('../service/chatService')

router.put('/:id', requestService.updateStatusById)

router.post('/messages', chatService.updateMessage)
router.get('/messages', chatService.getMessage)

module.exports = router;
