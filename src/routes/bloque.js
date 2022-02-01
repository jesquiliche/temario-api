const router = require('express').Router();
const jwt = require('jsonwebtoken');
const registerUser = require("../controllers/RegisteUser.Controller");
const loginUser=require("../controllers/LoginUser.controller");
const getBloque = require('../controllers/bloque.controller');
const verifyToken=require('../midleware/validate-token');



router.get("/",verifyToken,getBloque);
   



module.exports = router;