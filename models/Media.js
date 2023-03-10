const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sockSchema = new Schema({
    size: {
        type: String,
        required: true
    },
    material: {
        type: String,
        required: true
    }
});

const Sock = mongoose.model("Sock", sockSchema);

module.exports = Sock;