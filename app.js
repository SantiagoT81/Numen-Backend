const express = require('express')
const app = express()
const port = 3000 
const empleadosRouter = require("./routes/empleados")
const buzosRouter = require("./routes/buzos")
const zapatillasRouter = require("./routes/shoes")
const mediasRouter = require("./routes/socks")


const dbConnect = require('./database/dbConnection')
//Tuve que descargar un parser porque no me dejaba realizar posts
const bp = require('body-parser')

app.use(bp.json())
app.use(bp.urlencoded({extended: true}))

//RUTAS
app.use("/empleados",empleadosRouter)
app.use("/buzos",buzosRouter)


//Cuando recibe una GET REQUEST devuelve una RESPONSE
app.get('/', (req,res) => {
    res.send("<h1>NIKE STORE BACKEND</h1>")
})

// Iniciar servidor en puerto 3000 
app.listen(port, () => {
    console.log('Conexión exitosa. Puerto: ', port)
})

dbConnect();