const router = require('express').Router();
const Municipio = require('../models/Municipio');



const getMunicipioFindProv= async (req, res) => {
    const prov=req.params.id;
    

    const filterObject={"id": {$regex: prov1}}

  
    const municipios = await Municipio.find();
    const m=municipios.filter(e=>(e.id.substring(0,2)==prov))
    console.log(m)
    return res.json(m);
      
}


module.exports=getMunicipioFindProv

