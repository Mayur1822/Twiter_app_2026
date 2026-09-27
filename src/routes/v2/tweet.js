import express from "express";
const router=express.Router();
router.get("/",(req,res)=>
{
    return res.json({
        "message":"welcome to tweet route of v2"
    })
})
router.get("/:id",(req,res)=>{
    console.log(req.params);
    
    return res.json({
        "message":"welcome to tweet route id of v2",
        "id":req.params.id
        
    })
});
router.all("/*splat",(req,res)=>{
   return res.json({
        "message":"404 not found"
    });
});

export default router;