import express from "express";
import { getTweet,getTweetById,wrongTweetRquestController,createTweet,deleteTweetById,updateTweetById} from "../../controller/tweetControllerV1.js";
import {createTweetManualValidator} from "../../validator/tweetManualvalidator.js";
import validate from "../../validator/zodValidator.js"
import { tweetIdManualValidator } from "../../validator/tweetIdManualValidator.js";
import {tweetZodSchema} from "../../validator/tweetZodSchema.js"
import uploads from "../../config/multerConfig.js";
import cloudinary from "../../config/cloudinaryConfig.js";
import { cloudinaryUploader } from "../../middleware/cloudinaryUploaderMiddleware.js";
import path from "path";
import fs from "fs/promises";
const router=express.Router();
router.get("/",getTweet);

router.get("/:id",tweetIdManualValidator,getTweetById)
router.post("/",uploads.single("view"),validate(tweetZodSchema),cloudinaryUploader,createTweet);

router.delete("/:id",tweetIdManualValidator,deleteTweetById);
router.put("/:id",tweetIdManualValidator,updateTweetById)
router.all("/*splat ",wrongTweetRquestController);

export default router;
