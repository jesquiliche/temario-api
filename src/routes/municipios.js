const router = require('express').Router();

const GetMunicipio=require("../controllers/GetMunicipios.controller");
const GetMunicipioProv=require("../controllers/GetMunicipiosFindProv.controller copy");

router.get('/',GetMunicipio);

router.get("/:id",GetMunicipioProv)


module.exports = router;