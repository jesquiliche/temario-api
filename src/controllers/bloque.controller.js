const router = require('express').Router();
const verifyToken = require('../midleware/validate-token');
const Bloque=require("../models/Bloque");

//Obtener todos los bloques del temario
const getBloque= async (req, res) => {
    verifyToken();
    const bloque = await Bloque.find();
    return res.status(200).json(bloque);
}

module.exports=getBloque;