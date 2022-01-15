const router = require('express').Router();
const Municipio = require('../models/Municipio');



const getMunicipioFindProv= async (req, res) => {
    const prov=req.params.id;
    

    //const filterObject='{$regex:/^'+prov+'/}'
    //console.log(filterObject)
    //console.log({id: filterObject})
    const municipios = await  Municipio.find({ id: new RegExp(`^${prov}`)});

    return res.json(municipios);
      
}


module.exports=getMunicipioFindProv

