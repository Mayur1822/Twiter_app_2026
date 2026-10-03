import { success } from "zod";
import {createTweet as createTweetService,getTweet as getTweetService,getTweetById as getTweetByIdService,deleteTweetById as deleteTweetByIdService,updateTweetById as updateTweetByIdService} from "../service/tweetService.js"
import { errorResponse,successResponse,internalServererrorResponse } from "../utility/responses.js";

export const wrongTweetRquestController=(req,res)=>{
   return res.status(404).json({
        "message":"404 not found"
    });};
export const createTweet=async (req,res)=>{
 try{
    const uri=  'http://res.cloudinary.com/f5y2avka/image/upload/v1790925131/uewdhfietedylbabtdki.png';
    const response=await createTweetService({body:req.body.body,image:uri});
     return successResponse(res,201,response,"Tweet created successfully");

 }
 catch(error){
      return internalServererrorResponse(res,error);
 }

}
export const getTweet=async(req,res)=>
{
    try{
        const response =await getTweetService()
        return successResponse(res,200,response,"Tweet fetched successfully");
    }catch(error){
      return internalServererrorResponse(res,error);
    }

} 
export const getTweetById=async(req,res)=>{
    try{
    const response=await getTweetByIdService(req.params.id);
    return successResponse(res,200,response,"Tweet fetched by id successfully");
}catch(error)
{
    return errorResponse(res,error) 
    }
}
export const deleteTweetById=async(req,res)=>{
    try{
        const response=await deleteTweetByIdService(req.params.id)
      return successResponse(res,200,response,"Tweet deleted successfully"); 
    }catch(error){
     return errorResponse(res,error)     
    }

}
export const updateTweetById=async(req,res)=>{
    try{
        
    const response=await updateTweetByIdService(req.params.id,req.body.body);
     return successResponse(res,200,response,"Tweet updated successfully"); 
     
 }catch(error){
        return errorResponse(res,error)     }
}
