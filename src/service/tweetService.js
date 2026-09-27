import {Filter} from "bad-words";
import  {createTweet as createTweetRepositary} from "../repositries/tweetRepositery.js";
export const createTweet= async({body})=>{
    const filter=new Filter();
    if(filter.isProfane(body)){
        console.log(body);
        filter.clean(body);
        throw new ("tweet contains blocked words")

    }
    const tweet =await createTweetRepositary({body})
return tweet;
}
