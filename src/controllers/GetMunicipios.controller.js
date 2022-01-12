const router = require('express').Router();
const Municipio = require('../models/Municipio');


const getMunicipio= async (req, res) => {
    
    const municipios = await Municipio.find();
    return res.json(municipios);
      
}



module.exports=getMunicipio;
