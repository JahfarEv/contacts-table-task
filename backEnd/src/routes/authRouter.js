const express = require('express')
const authController = require('../controllers/authController')

const authRouter = express.Router();

authRouter.post('/signup',authController.signup)
.post('/login',authController.login)

module.exports = authRouter