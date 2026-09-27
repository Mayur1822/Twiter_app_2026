import express from "express";
import { tweetController,tweeidController,wrongTweetRquestController,createTweet } from "../../controller/tweetControllerV1.js";
import {createTweetManualValidator} from "../../validator/tweetManualvalidator.js";
import validate from "../../validator/zodValidator.js"
import {tweetZodSchema} from "../../validator/tweetZodSchema.js"
const router=express.Router();
router.get("/",tweetController)

router.get("/:id",tweeidController)
router.post("/",validate(tweetZodSchema),createTweet);
// router.all("/*splat ",wrongTweetRquestController)

export default router;