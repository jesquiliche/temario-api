const router = require('express').Router();
const User=require("../models/User");
const Joi = require('@hapi/joi');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const registerUser = require("../controllers/RegisteUser.Controller");
const loginUser=require("../controllers/LoginUser.controller");
const getUser=require("../controllers/GetUser.controller");
const FindUser=require("../controllers/FindUser.controller");
const UpdateUser=require("../controllers/UpdateUser.Controller");


router.post('/register', registerUser);

router.post('/login', loginUser);

router.get("/",getUser);

router.get("/:id",FindUser);
router.put("/:id",UpdateUser)
   



module.exports = router;