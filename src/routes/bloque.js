const router = require('express').Router();
const {getBloque,addBloque,findBloque,deleteBloque} = require('../controllers/bloque.controller');
const verifyToken=require('../midleware/validate-token');



router.get("/",verifyToken,getBloque);
router.get("/:id",verifyToken,findBloque);
   
router.post("/",verifyToken,addBloque);
router.delete("/:id",verifyToken,deleteBloque);



module.exports = router;