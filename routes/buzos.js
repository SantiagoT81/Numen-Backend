const express = require('express')
const {check} = require('express-validator')
const router = express.Router()
const buzoController = require('../controllers/buzoController')
//middleware

router.get("/", buzoController.getBuzos)
router.get("/talles/:size", buzoController.getBuzosSizes)

router.post('/ingresar', 
        [check("color").not().isEmpty().withMessage('Color requerido'),
        check("size").not().isEmpty().withMessage('Talle requerido').isIn(['XS','S','M','L','XL','XXL']).withMessage('Talla inválida (XS a XXL)'),
        check("hasDiscount").isBoolean().withMessage('Descuento debe ser "true" o "false"')
        ],buzoController.postBuzo)

router.put('/actualizar/:id', buzoController.updateBuzo)

router.delete('/borrar/:id', buzoController.deleteBuzo)

module.exports = router