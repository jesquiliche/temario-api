const router = require('express').Router();
const Municipio = require('../models/Municipio');



const getMunicipioFindProv= async (req, res) => {
    const prov=req.params.id;
    const filter=`{id:/^${prov}/}`
    const municipios = await Municipio.find({id:/^08/});
    return res.json(municipios);
      
}


module.exports=getMunicipioFindProv

