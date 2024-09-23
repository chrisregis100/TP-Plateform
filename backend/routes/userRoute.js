/* eslint-disable no-undef */
 
const express = require('express');
const { SetPostUsers, SetConnexion, setVerifyMail } = require('../controllers/userController');


const router = express.Router()


router.post("/register", SetPostUsers)
router.post("/login", SetConnexion)
router.get("/users/:id/verify/:token/", setVerifyMail );


module.exports = router

