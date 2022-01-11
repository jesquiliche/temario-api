const User=require("../models/User");

const UpdateUser = async (req,res) => {
    const {id}=req.params
    const user = await User.findByIdAndUpdate(id,req.body,{ new: true })
    return res.json(user);
}

module.exports=UpdateUser;