const { validationResult } = require('express-validator');
const Empleado = require('../models/Empleado')

const getEmpleados = async (req, res) => {
    const empleados = await Empleado.find()
    if(empleados){
        res.status(200).json(empleados)
    }else{
        res.status(404).send('Documento sin registros')
    }
};

const getEmpleadoByID = async(req, res) => {
    try{
        const empleado = await Empleado.findById(req.params.id)
        if (empleado !== undefined && empleado !== null){
            res.status(200).json({empleado:empleado})
        } else {
            res.status(404).json({user: null, msg: "Empleado inexistente"})
        }
    }catch{
        res.status(404).send('<h1>Empleado inexistente </h1>')
    }
};

const getEmpleadosByLastname = async(req, res) => {
    try{
        const empleados = await Empleado.find({lastName: req.params.lastName})
        res.status(200).json(empleados)
    }catch{
        res.status(404).send('Apellido no encontrado')
    }
}

const postEmpleado = async (req, res) => {
    try{
        const validationError = validationResult(req);
        if (validationError.isEmpty()){
            const empleado = new Empleado(req.body);
            await empleado.save();
            res.status(201).send('Empleado registrado exitosamente')
        } else {
            res.status(400).json({msg:"Error en el registro del usuario", error: validationError.errors})
        }
    }catch(error){
        res.status(500).json({errores: error})
    }};

const updateEmpleado = async(req,res) => {
    try{
        await Empleado.findOneAndUpdate({employeeId: req.params.employeeId}, req.body)
        //await Empleado.findByIdAndUpdate(req.params.id, req.body)
        res.status(201).send('Registro actualizado')
    }catch(error){
        res.status(500).send('Error al actualizar registro')
    }
}

const deleteEmpleado = async(req, res) => {
    try{
        await Empleado.findOneAndDelete({employeeId: req.params.employeeId})
        res.status(201).send('Registro borrado exitosamente')
    }catch(error){
        res.status(500).send("Error al borrar empleado")
    }
}

module.exports = {getEmpleados, getEmpleadoByID, postEmpleado, getEmpleadosByLastname, updateEmpleado, deleteEmpleado}