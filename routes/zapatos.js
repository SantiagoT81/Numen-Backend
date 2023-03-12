const express = require('express')
const {check} = require('express-validator')
const router = express.Router()
const zapatoController = require('../controllers/zapatoController')

router.get("/", zapatoController.getZapatos)
router.get("/talles/:size", zapatoController.getZapatosSizes)

module.exports = router