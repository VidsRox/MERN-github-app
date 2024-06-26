import express from "express";
import { getLikes, getUserProfileAndRepos } from "../controllers/user.controller.js";
import {ensureAuthenticated} from "../middleware/ensureAuthenticated.js"
import { likeProfile } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/profile/:username", getUserProfileAndRepos);
router.get("/likes/:username", ensureAuthenticated, getLikes);
router.post("/like/:username", ensureAuthenticated, likeProfile)

export default router;