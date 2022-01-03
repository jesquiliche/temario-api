const User=require("../models/User");
const Joi = require('@hapi/joi');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const schemaRegister = Joi.object({
    nombre: Joi.string().required(),
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required(),
    apellidos: Joi.required(),
    telefono:Joi.string().min(3).required(),
    direccion:Joi.string().min(5).required(),
    poblacion:Joi.string().min(3).required(),
    region:Joi.string().min(3).required(),
    pais:Joi.string().min(3).required()
})

const registerUser= async (req, res) => {
// validate user
    console.log(req.body);
    const { error } = schemaRegister.validate(req.body)
    
    if (error) {
        return res.status(400).json({error: error.details[0].message}   )
    }

    const isEmailExist = await User.findOne({ email: req.body.email });
    if (isEmailExist) {
        return res.status(400).json(
            {error: 'Email ya registrado'}
        )
    }
    
    // hash contraseña
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);
    req.body.password=password
    const user = new User(req.body);

    try {
        console.log(req.body)
        
        const savedUser = await user.save();
        res.json({
            error: null,
            data: savedUser
        })
    } catch (error) {
        res.status(400).json({error})
    }
};

module.exports=registerUser;