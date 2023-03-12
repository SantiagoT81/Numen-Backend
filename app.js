const express = require('express')
const app = express()
const port = 3000 
const empleadosRouter = require("./routes/empleados")
const buzosRouter = require("./routes/buzos")
const zapatosRouter = require("./routes/zapatos")
const mediasRouter = require("./routes/medias")


const dbConnect = require('./database/dbConnection')
//Tuve que descargar un parser porque no me dejaba realizar posts
const bp = require('body-parser')

app.use(bp.json())
app.use(bp.urlencoded({extended: true}))

//RUTAS
app.use("/empleados",empleadosRouter)
app.use("/buzos",buzosRouter)
app.use("/zapatos", zapatosRouter)

//Cuando recibe una GET REQUEST devuelve una RESPONSE
app.get('/', (req,res) => {
    res.send("<h1>NIKE STORE BACKEND</h1>")
})

//Direcciones inválidas redirigen a una página que muestra error
app.get('*', function(req, res){
    res.status(404).send("<h1>PÁGINA ERRÓNEA</h1>");
  });

// Iniciar servidor en puerto 3000 
app.listen(port, () => {
    console.log('Conexión exitosa. Puerto: ', port)
})

dbConnect();