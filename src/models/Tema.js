const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const temaSchema = new Schema({

    numero:{
        type: Number,
        required: true
    },
    descripcion:{
        type: String,
        required: true
    },
},
{ timestamps:true}
);

// Crear el modelo
const Tema = mongoose.model('Tema', temaSchema);

module.exports = Tema;