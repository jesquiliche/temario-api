const router = require('express').Router();
const User=require("../models/User");
const Joi = require('@hapi/joi');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const getUser= async (req, res) => {
    
    const user = await User.find();
    return res.code(200).json(user);
      
}

module.exports=getUser;