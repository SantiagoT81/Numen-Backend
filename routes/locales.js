const express = require('express')
const {check} = require('express-validator')
const localController = require('../controllers/localController');
const router = express.Router();
const validateCodigoLocal = require('../middlewares/validateCodigoLocal');

router.get('/', localController.getLocales)
router.get('/:codigoLocal',localController.getLocalByCodigoLocal)

router.post('/ingresar', validateCodigoLocal,
    [
        check("pais").notEmpty().withMessage("País requerido").isString().withMessage("País inválido"),
        check("cantEmpleados").notEmpty().withMessage('Indicar cantidad de empleados').isInt().withMessage("Representar empleados en enteros"),
        check("codigoLocal").notEmpty().withMessage("Código del local requerido").isAlphanumeric().withMessage("El código debe empezar con las iniciales del país, seguido de su identificador numérico")
    ]
,localController.postLocal)

router.delete('/borrar/:codigoLocal',localController.deleteLocal)
router.put('/actualizar:codigoLocal', localController.updateLocalByCodigoLocal)

module.exports = router
