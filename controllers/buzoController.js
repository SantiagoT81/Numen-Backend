//express validator
const Buzo = require('../models/Buzo');

const getBuzos = async (req, res) => {
    const buzos = await Buzo.find()
    res.status(200).json(buzos)
};


module.exports = {getBuzos}