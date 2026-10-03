import {Filter} from "bad-words";
import  {createTweet as createTweetRepositary ,getTweet as getTweetRepository,getTweetById as getTweetByIdRepository,deleteTweetById as deleteTweetByIdRepository,updteTweetById as updteTweetByIdRepository } from "../repositries/tweetRepositery.js";
export const createTweet= async(req)=>{
    const filter=new Filter();
    if(filter.isProfane(req.body)){
        console.log(req.body);
        filter.clean(req.body);
        throw new ("tweet contains blocked words")

    }
    const tweet =await createTweetRepositary(req);
return tweet;
}

export const getTweet=async()=>
{
 const tweet=await getTweetRepository();
 return tweet;

}
export const getTweetById =async(id)=>
{
    const tweet =await getTweetByIdRepository(id);
    if(!tweet){
        throw({
            status:404,
            message:"Tweet not found"
        })
    }
    return tweet;

}
export const deleteTweetById=async(tweetid)=>{
    const tweet=await deleteTweetByIdRepository(tweetid);
    if(!tweet){
        throw({
            status:404,
            message:"message not found"
        })
    }
    return tweet;
}
export const updateTweetById=async(tweetid,body)=>
{
    const tweet=await updteTweetByIdRepository(tweetid,body)
    if(!tweet){
        throw({
            status:404,
            message:"Tweet not found"
        })
    }
    return tweet;
}