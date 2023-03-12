const express = require('express')
const {check} = require('express-validator')
const router = express.Router()
const zapatoController = require('../controllers/zapatoController')

router.get("/", zapatoController.getZapatos)
router.get("/talles/:size", zapatoController.getZapatosSizes)

router.post("/ingresar", 
        [
            check("model").notEmpty().withMessage("Modelo requerido").not().isNumeric().withMessage('El nombre del modelo solo contiene números'),
            check("size").isInt({min:1, max:46}).withMessage("El talle tiene un valor negativo o mayor al aceptado (46)").notEmpty().withMessage('Talle requerido')
        ],zapatoController.postZapatos)

router.delete("/borrar/:id", zapatoController.deleteZapatos)

router.put("/actualizar/:id",zapatoController.updateZapatos)

module.exports = router