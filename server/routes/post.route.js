import express from "express";
import {
  uploadAuth,
  getPosts,
  getPost,
  createPost,
  deletePost,
  featurePost,
} from "../controllers/post.controller.js";
import { increaseVisit } from "../middleware/increaseVisit.js";

const router = express.Router();

router.get("/upload-auth", uploadAuth);

router.get("/", getPosts);
router.get("/:slug", increaseVisit, getPost);
router.post("/writeblog", createPost);
router.delete("/:id", deletePost);
router.patch("/feature", featurePost);

export default router;
