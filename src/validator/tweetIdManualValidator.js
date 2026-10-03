import mongoose from "mongoose";
export const tweetIdManualValidator=(req,res,next)=>{
    const isValidId=mongoose.Types.ObjectId.isValid(req.params.id);
    if(!isValidId)
    {
        return res.status(400).json({
            success:false,
            message:"invalid Tweet Id"
        })
    }
    next();

}