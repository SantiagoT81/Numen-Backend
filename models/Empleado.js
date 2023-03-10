const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const empleadoSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true
    },
    employeeId: {
        type: Number,
        required: true,
        unique: true
    },
    role: {
        type: String,
        required: true
    }
});

const Empleado = mongoose.model("Empleado", empleadoSchema)

module.exports = Empleado