import express from "express";
const router =express.Router();
router.get("/",(req,res)=>{
    return res.json({
        "message":"welcome to comment route of v1"
    })
})
router.get("/:id",(req,res)=>{
    return res.json({
        "message":"welcome to the comments id route of v1",
        "id":req.params.id
    })
})
router.all("/*splat",(req,res)=>{
   return res.json({
        "message":"404 not found"
    });
});

export default router;