import express from "express";
import tweetsRoute from "./tweet.js";
import commentsRoute from "./comment.js"
const route =express.Router();

route.use("/tweets",tweetsRoute);
route.use("/comments",commentsRoute);
route.get("/",(req,res)=>{
    return res.json({
        "message":"v1 route"
    })
});
route.all("/*splat",(req,res)=>{
   return res.json({
        "message":"404 not found"
    });
});
export default route;
