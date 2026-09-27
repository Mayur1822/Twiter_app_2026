import Tweet from "../schema/tweet.js";
export const createTweet=async({body})=>{
    try{
        const tweet = await Tweet.create({body})
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
        const tweet=await Tweet.findById(tweetid)
    }
    catch(error){
        throw error;
    }
}