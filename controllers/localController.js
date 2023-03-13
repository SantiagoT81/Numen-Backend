const {validationResult} = require('express-validator');
const Local = require('../models/Local');

const getLocales = async (req, res) => {
    const locales = await Local.find()
    if (locales){
        res.status(200).json(locales)
    }else{
        res.status(404).send("Documento sin registros")
    }
};

const getLocalByCodigoLocal = async (req, res) => {
    const local = await Local.findOne({codigoLocal: req.params.codigoLocal})
    if (local){
        res.status(200).json(local)
    }else{
        res.status(404).send("Local no encontrado")
    }
}

const postLocal = async (req, res) => {
    try{
        const validationError = validationResult(req);
        if (validationError.isEmpty()){
            const local = new Local(req.body);
            await local.save();
            res.status(201).send("Local registrado")
        }else {
            res.status(400).send("Error al registrar local")
        }

    }catch(error){
        res.status(500).json({errores:error})
    }
}

const updateLocalByCodigoLocal = async (req, res) => {
    try {
        await Local.findOneAndUpdate({codigoLocal: req.params.codigoLocal})
        res.status(201).send("Registro actualizado")
    }catch(error){
        res.status(500).send("Error al actualizar registro")
    }
}

const deleteLocal = async (req, res) => {
    try {
        await Local.findOneAndDelete({codigoLocal: req.params.codigoLocal})
        res.status(201).send("Local eliminado exitosamente")
    }catch(error){
        res.status(500).send("Error al eliminar local")
    }
}

module.exports = {getLocales, getLocalByCodigoLocal, postLocal, updateLocalByCodigoLocal, deleteLocal}