const validate=(schema)=>{
    return async function(req,res,next){
        try{
            console.log(req.body);
            schema.parse(req.body);
            next();
        }catch(error)
        {
            return res.status(400).json({
                error1:error.errors,
                success:false,
                message:"data is not validate"

            })
        }
    }
}
export default validate;