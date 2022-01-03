const router = require('express').Router();
const Bloque=require("../models/Bloque");

const getBloque= async (req, res) => {
    
    const user = await Bloque.find();
    return res.json(user);
}

module.exports=getBloque;