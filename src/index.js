import morgan from "morgan"  
import express from "express"
const app=express();

app.listen(3000,()=>{
    console.log("server started at port number 3000");
});
function mid1(req,res,next){
console.log("mid1");
next();

}

function mid2(req,res,next){
    console.log("mid2");
    next();    
}
function mid3(req,res,next){
  console.log("mid3");
  next();
}
function commonMiddlewares(req,res,next){
    console.log("common middleware");
    next();
}
app.use(morgan("combined"));
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded());

app.get("/ping",[mid1,mid2,mid3],(req,res)=>{
    
    console.log(req.body);
    
    return res.json({
        message:"pong"

    });
});
app.post("/hello",[mid1,mid2,mid3],(req,res)=>{
    console.log(req.query);
    return res.json({message:"world"});
});
app.get("/tweets/:tweet_id",(req,res)=>{
    console.log(req.params)
   return res.json({"tweet":"hello"})
});
app.all("/*splat",(req,res)=>{
    return res.status(404).json({
        "404":"not found"
    })
})