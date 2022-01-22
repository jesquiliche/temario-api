const router = require('express').Router();
const registerUser = require("../controllers/RegisteUser.Controller");
const loginUser=require("../controllers/LoginUser.controller");
const getUser=require("../controllers/GetUser.controller");
const FindUser=require("../controllers/FindUser.controller");
const UpdateUser=require("../controllers/UpdateUser.Controller");
const DeleteUser=require("../controllers/DeleteUser.controller");
const getUserFilter = require('../controllers/GetUserFilter.controller');


router.post('/register', registerUser);

router.post('/login', loginUser);

router.get("/",getUser);
router.post("/filter",getUserFilter);

router.get("/:id",FindUser);
router.put("/:id",UpdateUser)
router.delete("/:id",DeleteUser)
   



module.exports = router;