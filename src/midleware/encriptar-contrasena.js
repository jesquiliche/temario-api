const bcrypt = require('bcrypt');

//Encriptador de contraseñas
const encriptarContrasena=async (password)=>{
    const salt = await bcrypt.genSalt(10);
    const pass = await bcrypt.hash(password, salt);
    return pass;
}

module.exports=encriptarContrasena;
    