const express = require('express')
const {check} = require('express-validator')
const router = express.Router()
const buzoController = require('../controllers/buzoController')
//middleware

router.get("/", buzoController.getBuzos)

module.exports = router