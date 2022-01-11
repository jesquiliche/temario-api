const router = require('express').Router();
const User=require("../models/Provincia");
const Provincia = require('../models/Provincia');


const getProvincia= async (req, res) => {
    
    const provincias = await Provincia.find();
    return res.json(provincias);
      
}

module.exports=getProvincia;
