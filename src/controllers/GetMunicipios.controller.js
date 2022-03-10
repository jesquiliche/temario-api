const router = require('express').Router();
const verifyToken = require('../midleware/validate-token');
const Municipio = require('../models/Municipio');


//Obtener todos los municipios de España
const getMunicipio= async (req, res) => {

    const municipios = await Municipio.find();
    return res.status(200).json(municipios);
      
}



module.exports=getMunicipio;
