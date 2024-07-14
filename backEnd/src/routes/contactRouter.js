const express = require('express')
const contactController = require('../controllers/contactController')

const contactRouter = express.Router();

contactRouter
.post('/create-contact',contactController.createContact)
.get('/get-contacts', contactController.getContact)

module.exports = contactRouter