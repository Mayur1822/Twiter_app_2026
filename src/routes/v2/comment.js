import express from "express";
const router =express.Router();
router.get("/",(req,res)=>{
    return res.json({
        "message":"welcome to comment route of v2"
    })
})
router.get("/:id",(req,res)=>{
    return res.json({
        "message":"welcome to the comment id route of v2",
        "id":req.params.id
    })
})
router.all("/*splat",(req,res)=>{
   return res.json({
        "message":"404 not found"
    });
});

export default router;