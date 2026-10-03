export const errorResponse=(res, error)=>{
       console.log(error);
 
    if(error.status){
            return res.status(error.status).json({
                success:false,
                message:error.message
            })
        }
        return res.status(500).json({
            success:false,
            message:"internal service erroror"
        })


    }
export const successResponse=(res,statuscode,response,message)=>
{
    return res.status(statuscode).json({
      success:true,
            data:response,
            message:message
    })

}
export const internalServererrorResponse=(res,error)=>
{
    console.log(error);
    
      return res.status(500).json({
            success:false,
            error:error,
            message:"internal servererror"
        })
}