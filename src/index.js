const express=require('express');
const app=express();
const bodyParser = require('body-parser');
const mongoose=require("./mongoose")
require('dotenv').config()

const Pregunta=require("./models/Pregunta")
const Bloque=require("./models/Bloque")



const newBloque = new Bloque({numero:1, descripcion:"Descripcion de prueba"});
newBloque.save()

const newPregunta = new Pregunta({
    numero:1,
    descripcion:"descripcion de prueba",
    respuesta: {
        a: "Respueta a",
        b: "Respuesta b",
        c: "Respuesta c",
        d: "Respuseta d"
    }

})

newPregunta.save()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const cors = require('cors');

app.use(cors());


app.set("port",process.env.PORT || 3001);

// import routes
const authRoutes = require('./routes/auth');

// route middlewares
app.use('/api/user', authRoutes);




app.get("/",function(req, res) {
    res.send('hello world');
    console.log("Entro")
  });

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');

    // authorized headers for preflight requests
    // https://developer.mozilla.org/en-US/docs/Glossary/preflight_request
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();

    app.options('*', (req, res) => {
        // allowed XHR methods  
        res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
        res.send();
    });
});

// import routes
const dashboadRoutes = require('./routes/dashboard');
const bloqueRoutes=require("./routes/bloque")
const verifyToken = require('./midleware/validate-token');

// route middlewares
app.use('/api/bloque',verifyToken, bloqueRoutes);

app.use('/api/dashboard', verifyToken, dashboadRoutes);


app.listen(app.get("port"),()=>{
    console.log("Server express on port "+app.get("port"));
});

