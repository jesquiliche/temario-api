const router = require('express').Router();
const User=require("../models/User");
const Joi = require('@hapi/joi');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { TokenExpiredError } = require('jsonwebtoken');

const schemaLogin = Joi.object({
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(3).max(1024).required()
})

const loginUser= async (req, res) => {
    // validaciones
    
    const { error } = schemaLogin.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message })
    
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).json({ error: 'Usuario no encontrado' });

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).json({ error: 'contraseña no válida' })
    
    const token = jwt.sign({
        nombre: user.nombre,
        id: user._id
        }, process.env.TOKEN_SECRET,{
            expiresIn: '24h' 
        })
    
   
   res.header('auth-token', token).json({
        error: 200,
        data: {token}
    })
    
    
}

module.exports=loginUser;