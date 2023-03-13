const mongoose = require('mongoose');
require('dotenv').config();
//Las rutas se especifican en mongoDB en sí. El cluster define la ruta (en este caso "test") y su ramificación de usuarios (test/usuarios)
const dbConnect = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Conectando a la DB')
    }catch(error){
        throw new Error('Conexión fallida' + error)
    }
};

module.exports = dbConnect