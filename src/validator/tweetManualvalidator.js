export const createTweetManualValidator=(req,res,next)=>{
if(!req.body.tweet){
    return res.status(400).json({
        error:"tweet is required"
    });
}
if(req.body.tweet.length>200){
    return res.status(400).json({
        error:"tweet must be 200 character or less"
    }) ;
}
next();
}