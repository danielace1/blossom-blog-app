import Comment from "../models/comment.model.js";
import User from "../models/user.model.js";

export const getPostComments = async (req, res) => {
  const comments = await Comment.find({ post: req.params.postId })
    .populate("user", "username img")
    .sort({ createdAt: -1 });

  res.status(200).json(comments);
};

export const addComment = async (req, res) => {
  const clerkUserId = req.auth.userId;
  const postId = req.params.postId;

  if (!clerkUserId) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const user = await User.findOne({ clerkUserId });

  const newComment = new Comment({
    ...req.body,
    user: user._id,
    post: postId,
  });

  await newComment.save();

  setTimeout(() => {
    res.status(201).json(newComment);
  }, 3000);
};

export const deleteComment = async (req, res) => {
  const clerkUserId = req.auth.userId;
  const id = req.params.id;

  if (!clerkUserId) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const user = User.findOne({ clerkUserId });

  const deleteComment = await User.findOneAndDelete({
    _id: id,
    user: user._id,
  });

  if (!deleteComment) {
    return res.status(404).json({ message: "Comment not found" });
  }

  return res.status(200).json({ message: "Comment deleted." });
};
