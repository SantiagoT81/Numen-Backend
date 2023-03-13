const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const localSchema = new Schema({
    pais: {
        type: String,
        required: true
    },
    cantEmpleados: {
        type: Number,
        required: true
    },
    codigoLocal: {
        type: String,
        required: true
    }
});

const Local = mongoose.model("Local", localSchema);

module.exports = Local;