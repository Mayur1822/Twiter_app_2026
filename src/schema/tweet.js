import mongoose from "mongoose";
const tweetSchema=new mongoose.Schema({
    body:{
        type:String,
        required:true,
        trim:true,
        maxlength:200
    },
    image:{
        type:String,
        _default:null
    }
});
const Tweet =mongoose.model("Tweet",tweetSchema);
export default Tweet;