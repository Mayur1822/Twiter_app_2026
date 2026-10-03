import { success } from "zod";
import {createTweet as createTweetService,getTweet as getTweetService,getTweetById as getTweetByIdService,deleteTweetById as deleteTweetByIdService,updateTweetById as updateTweetByIdService} from "../service/tweetService.js"
export  const tweetController=(req,res)=>
{
    return res.json({
        "message":"welcome to tweets route of v1"
    })
};
export const tweeidController =(req,res)=>{
    console.log(req.params);
    
    return res.json({
        "message":"welcome to tweets route id of v1",
        "id":req.params.id
        
    })
};
export const wrongTweetRquestController=(req,res)=>{
   return res.status(404).json({
        "message":"404 not found"
    });};
export const createTweet=async (req,res)=>{
 try{
    const uri=  'http://res.cloudinary.com/f5y2avka/image/upload/v1790925131/uewdhfietedylbabtdki.png';
    const response=await createTweetService({body:req.body.body,image:uri});
     return res.status(201).json({
        success:true,
        data:response,
        message:"Tweet created successfully"
     })

 }
 catch(error){
    console.log(error);
    return res.status(500).json({
        success:false,
        messaqge:"unable to create tweet"
    });
 }

}
export const getTweet=async(req,res)=>
{
    try{
        const response =await getTweetService()
        return res.status(200).json({
            success:true,
            data:response,
            message:"All tweet fetched successfully"
        })
    
    }catch(err){
        return res.status(500).json({
            success:false,
            error:err,
            message:"can not fetch tweet servererror"
        })
    }

} 
export const getTweetById=async(req,res)=>{
    try{
    const response=await getTweetByIdService(req.params.id);
    return res.status(200).json({
        success :true,
        data:response,

    })
}catch(err)
{
    if(err.status){
        return res.status(404).json({
        success:false,
        message:"Tweet not found"

    })

    }
    return res.status(500).json({
        success:false,
        message:"internal service error"

    })
    }
}
export const deleteTweetById=async(req,res)=>{
    try{
        const response=await deleteTweetByIdService(req.params.id)
      return  res.status(200).json({
            success:true,
            data:response,
            message:"Tweet deleted successfully"

        }) 
    }catch(err){
        if(err.status){
            return res.status(404).json({
                success:false,
                message:"Tweet not found"
            })
            
        }
        return res.status(500).json({
            success:false,
            message:"internal service error"
        })
    }

}
export const updateTweetById=async(req,res)=>{
    try{
        
    const response=await updateTweetByIdService(req.params.id,req.body.body);
    return res.status(200).json({
      success:true,
            data:response,
            message:"Tweet updated successfully"  
    })
    }catch(err){
        if(err.status){
            return res.status(err.status).json({
                success:false,
                message:err.message
            })
        }
        return res.status(500).json({
            success:false,
            message:"internal service error"
        })
    }
}
