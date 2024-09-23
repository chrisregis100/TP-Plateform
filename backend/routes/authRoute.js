/* eslint-disable no-undef */
 
const express = require('express');
const { SetConnectUser } = require('../controllers/userController');

const router = express.Router()


router.post("/", SetConnectUser)

module.exports = router