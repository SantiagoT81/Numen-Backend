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

module.exports = {getZapatos, getZapatosSizes}