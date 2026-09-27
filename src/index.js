import morgan from "morgan" ; 
import express from "express";
import {PORT} from "./config/serverConfig.js";
import apiRoute from "./routes/apiRoute.js";
import connectDb from "./config/dbConfig.js";
const app=express();

app.listen(PORT,()=>{
    console.log(`server started at port number ${PORT}`);
    connectDb();
});
app.use(morgan("combined"));
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded());
app.use("/api",apiRoute);

app.get("/ping",(req,res)=>{
    
    console.log(req.body);
    
    return res.json({
        message:"pong"

    });
});
app.all("/*splat",(req,res)=>{
    return res.status(404).json({
        "404":"not found server"
    })
});