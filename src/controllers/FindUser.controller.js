const User=require("../models/User");

const FindUser = async (req,res) => {
    const {id}=req.params;
    const user = await User.findById(id,
        {"_id":0,"__v":0,"createdAt":0,"updatedAt":0 });
    return res.json(user);
}

module.exports=FindUser;
