const { validationResult } = require('express-validator');
const Zapato = require('../models/Zapato');

const getZapatos = async (req, res) => {
    const zapatos = await Zapato.find()
    if(zapatos){
        res.status(200).json(zapatos)
    }else {
        res.status(404).send('Documento sin registros')
    }
};

const getZapatosSizes = async (req, res) => {
    try{
        const zapatos = await Zapato.find({size: req.params.size})
        if(zapatos){
            res.status(200).json(zapatos)
        }else{
            res.status(404).send(`No se encontraron zapatos con la talla ${req.params.size}`)
        }
    }catch{
        res.status(404).send('Error al encontrar zapatos')
    }
}

const postZapatos = async (req,res) => {
    try{
        const validationError = validationResult(req);
        if (validationError.isEmpty()){
            const zapato = new Zapato(req.body);
            await zapato.save();
            res.status(201).send('Zapatos registrados exitosamente')
        }else{
            res.status(400).json({msg:"Error al registrar entrada ", error: validationError.errors })
        }
    }catch(error){
        res.status(500).json({errores:error})
    }
};

const deleteZapatos = async(req,res) => {
    try {
        await Zapato.findByIdAndDelete(req.params.id)
        res.status(201).send('Registro eliminado exitosamente')
    }catch{
        res.status(500).send('Ocurrió un error al eliminar el registro')
    }
};

const updateZapatos = async(req, res) => {
    try {
        await Zapato.findByIdAndUpdate(req.params.id, req.body)
        res.status(201).send('Registro actualizado exitosamente')
    }catch{
        res.status(500).send('Ocurrió un error al actualizar el registro')
    }
};

module.exports = {getZapatos, getZapatosSizes, postZapatos, deleteZapatos, updateZapatos}