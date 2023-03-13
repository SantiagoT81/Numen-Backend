const Local = require('../models/Local');

const validateCodigoLocal = async (req, res, next) => {
    const local = await Local.findOne({codigoLocal: req.params.codigoLocal})
    if (local){
        res.status(400).send('Local ya registrado')
    }else {
        next();
    }
}

module.exports = validateCodigoLocal;