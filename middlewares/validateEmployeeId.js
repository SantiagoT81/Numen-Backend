const Empleado = require('../models/Empleado');

const validateEmployeeId = async (req, res, next) => {
    const empleado = await Empleado.findOne({employeeId: req.body.employeeId})
    if (empleado){
        res.status(400).send('Empleado preexistente')
    } else {
        next();
    }
};

module.exports = validateEmployeeId;