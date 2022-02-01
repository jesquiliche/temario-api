const router = require('express').Router();
const registerUser = require("../controllers/RegisteUser.Controller");
const loginUser=require("../controllers/LoginUser.controller");
const getUser=require("../controllers/GetUser.controller");
const FindUser=require("../controllers/FindUser.controller");
const UpdateUser=require("../controllers/UpdateUser.Controller");
const DeleteUser=require("../controllers/DeleteUser.controller");
const getUserFilter = require('../controllers/GetUserFilter.controller');
const verifyToken=require('../midleware/validate-token')

router.post('/register',verifyToken, registerUser);

router.post('/login', loginUser);

router.get("/",verifyToken,getUser);
router.get("/filter",verifyToken,getUserFilter);

router.get("/:id",verifyToken,FindUser);
router.put("/:id",verifyToken,UpdateUser)
router.delete("/:id",verifyToken,DeleteUser)
   



module.exports = router;