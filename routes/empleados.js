const express = require('express')
const {check} = require('express-validator')
const router = express.Router()
const employeeController = require('../controllers/empleadoController')
//Middleware para evitar que se repitan empleados con el mismo ID
const validateEmployeeId = require('../middlewares/validateEmployeeId')

router.get("/", employeeController.getEmpleados)
router.get('/:id', employeeController.getEmpleadoByID)
router.get('/apellidos/:lastName', employeeController.getEmpleadosByLastname)

router.post('/ingresar', validateEmployeeId,
    [
        check("firstName").not().isEmpty().withMessage('Primer nombre requerido'),
        check("lastName").not().isEmpty().withMessage('Apellido requerido'),
        check("employeeId").not().isEmpty().withMessage('ID requerida').isInt().withMessage('El ID debe ser numérico'),
        check("role").not().isEmpty().withMessage('Rol requerido')
    ], employeeController.postEmpleado)

router.put('/actualizar/:employeeId', employeeController.updateEmpleado)

router.delete('/borrar/:employeeId', employeeController.deleteEmpleado)

module.exports = router