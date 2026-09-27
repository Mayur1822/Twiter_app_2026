import mongoose from "mongoose";
import {MONGO_URL} from "./serverConfig.js";
export default async function connectDb(){
    try{
        await mongoose.connect(MONGO_URL);
        console.log("connection successfull");
        
    }
    catch(error){
        console.log("connection failed");
        console.log(error);
        
        
    }
}