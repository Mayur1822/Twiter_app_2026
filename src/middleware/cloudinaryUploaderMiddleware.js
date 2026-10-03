export const cloudinaryUploader=async (req,res,next)=>{
const result=await cloudinary.uploader.upload(req.file.path);
console.log(result);
await fs.unlink(req.file.path);


next();

}