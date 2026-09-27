import express from "express";
import v1Route from "./v1/v1Routes.js"
import v2Route from "./v2/v2Route.js"
const route =express.Router()
route.use("/v1",v1Route);
route.use("/v2",v2Route);
route.get("/",(req,res)=>{
    return res.json({
        "message":"api route"
    })
});
route.all("/*splat",(req,res)=>{
   return res.json({
        "message":"404 not found"
    });
});

export default route;
