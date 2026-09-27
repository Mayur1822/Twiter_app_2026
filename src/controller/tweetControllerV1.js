import {createTweet as createTweetService} from "../service/tweetService.js"
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
   return res.json({
        "message":"404 not found"
    });
};
export const createTweet=async (req,res)=>{
 try{
    const response=createTweetService({body:req.body.body});
     return res.status(201).json({
        success:true,
        data:response,
        "message":"Tweet created successfully"
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