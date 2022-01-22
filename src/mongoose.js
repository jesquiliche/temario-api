require("dotenv").config();
const mongoose = require('mongoose');


//const uri = `mongodb://localhost/temario`;
console.log(process.env.USER)
const uri = `mongodb+srv://jesquiliche:3912481B@cluster0.m14ql.mongodb.net/temario?authSource=admin&replicaSet=atlas-jjcdpd-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> console.log('conectado a mongodb')) 
  .catch(e => console.log('error de conexión', e))

module.exports=mongoose;