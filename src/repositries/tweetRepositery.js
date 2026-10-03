import Tweet from "../schema/tweet.js";
export const createTweet=async(req)=>{
    try{
        const tweet = await Tweet.create(req)
        return tweet;
    }
    catch(error)
  {
      throw error;
  }
}
export const getTweet=async ()=>{
    try{
        const tweet=await Tweet.find();
        return tweet;
    }
    catch(error){
        throw error;
    }
} 
export const getTweetById=async (tweetid)=>{
    try{
        const tweet=await Tweet.findById(tweetid);
        return tweet;
    }
    catch(error){
        throw error;
    }
}
export const deleteTweetById=async(tweetid)=>{
try{
    const tweet=await Tweet.findByIdAndDelete(tweetid);
    return tweet;

}catch(err)
{
    throw err;
}
}
export const updteTweetById=async(tweetid,body)=>
{
    try{
        const tweet=await Tweet.findByIdAndUpdate(tweetid,{body},{new:true}); 
        return tweet;

    }catch(err){
        throw err;
    }
}