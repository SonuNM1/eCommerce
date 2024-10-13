
import userModel from "../models/userModel.js";

export const getAllUsersController = async (req, res) => {
    try{
        const users = await userModel.find().select("-password") ; 

        res.status(200).json({
            success: true,
            users, 
        })
    }catch(error){
        console.log(error) ; 
        res.status(500).json({
            success: false,
            message: 'Error fetching users',
            error
        })
    }
}