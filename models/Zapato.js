const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const zapatoSchema = new Schema({
    model: {
        type: String,
        required: true
    },
    size: {
        type: Number,
        required: true
    }
});

const Zapato = mongoose.model("Zapato", zapatoSchema);

module.exports = Zapato;