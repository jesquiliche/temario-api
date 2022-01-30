const router = require('express').Router();
const verifyToken = require('../midleware/validate-token');
const Municipio = require('../models/Municipio');


const getMunicipio= async (req, res) => {
    verifyToken()
    const municipios = await Municipio.find();
    return res.json(municipios);
      
}



module.exports=getMunicipio;
