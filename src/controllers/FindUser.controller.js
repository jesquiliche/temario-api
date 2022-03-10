const verifyToken = require("../midleware/validate-token");
const User=require("../models/User");

//Buscar usuario por ID
const FindUser = async (req,res) => {
    const {id}=sanitize(req.params);
    const user = await User.findById(id,
        {"_id":0,"__v":0,"createdAt":0,"updatedAt":0 });
    return res.status(200).json(user);
}

module.exports=FindUser;
