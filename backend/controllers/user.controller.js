import User from "../models/user.model.js"

export const getUsersForSideBar= async (req,res)=>{
    try {

        const loggedInUserId=req.user._id

        const filteredUsers=await User.find({_id:{$ne:loggedInUserId}}).select("-password") //get users excluding the logged in user

        res.status(200).json(filteredUsers)
        
    } catch(error){
        console.log("Error in getUSersForSideBar controller",error.message)
        res.status(500).json({error: "Server Error"})
    }
}