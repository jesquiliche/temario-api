const User=require("../models/User");

const DeleteUser = async (req,res) => {
    const {id}=req.params;
    const user = await User.findByIdAndRemove(id)
    res.send("Borrado sadisfactoriamente")
}

module.exports=DeleteUser;
