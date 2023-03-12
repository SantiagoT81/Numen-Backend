const { validationResult } = require('express-validator');
const Buzo = require('../models/Buzo');

const getBuzos = async (req, res) => {
    const buzos = await Buzo.find()
    res.status(200).json(buzos)
};

const getBuzosSizes = async(req, res) => {
    try{
        const buzos = await Buzo.find({size: req.params.size})
        if(buzos){
            res.status(200).json(buzos)
        }else{
            res.status(404).send('Documento sin registros')
        }
    }catch(error){
        res.status(404).send('No se encontraron buzos')
    }
};

const postBuzo = async (req, res) => {
    try{
        const validationError = validationResult(req);
        if (validationError.isEmpty()){
            const buzo = new Buzo(req.body);
            await buzo.save();
            res.status(201).send('Buzo registrado exitosamente')
        } else {
            res.status(400).json({msg: "Error al registrar buzo", error: validationError.errors})
        }}catch(error){
            res.status(500).json({errores: error})
    }
}

const updateBuzo = async(req,res) => {
    try{
        await Buzo.findByIdAndUpdate(req.params.id, req.body)
        res.status(201).send('Buzo actualizado')
    }catch(error){
        res.status(500).send('Error al actualizar buzo')
    }
}

const deleteBuzo = async(req, res) => {
    try{
        await Buzo.findByIdAndDelete(req.params.id)
        res.status(201).send('Buzo eliminado')
    }catch{
        res.status(500).send('Error al eliminar buzo o inexistente')
    }
}

module.exports = {getBuzos, getBuzosSizes, postBuzo, updateBuzo, deleteBuzo}