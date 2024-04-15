const express = require('express');
const router = express.Router();
const { sendEmail, sendCode, getUser } = require('../controller/sendInfo'); 


router
.post('/send-email', sendEmail)
.patch('/send-code', sendCode)
.get('/users', getUser)


module.exports = router