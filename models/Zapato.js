const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shoeSchema = new Schema({
    model: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    }
});

const Shoe = mongoose.model("Shoe", shoeSchema);

module.exports = Shoe;