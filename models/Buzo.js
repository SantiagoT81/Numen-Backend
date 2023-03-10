const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const buzoSchema = new Schema({
    color: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    hasDiscount: {
        type: Boolean,
        required: true
    }
});

const Buzo = mongoose.model("Buzo", buzoSchema)

module.exports = Buzo