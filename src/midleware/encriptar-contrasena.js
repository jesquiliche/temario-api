const bcrypt = require('bcrypt');

const encriptarContrasena=async (password)=>{
    const salt = await bcrypt.genSalt(10);
    const pass = await bcrypt.hash(password, salt);
    return pass;
}

module.exports=encriptarContrasena;
    