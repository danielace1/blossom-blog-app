import Post from "../models/post.model.js";
import User from "../models/user.model.js";

export const getPosts = async (req, res) => {
  const posts = await Post.find();

  res.status(200).json(posts);
};

export const getPost = async (req, res) => {
  const post = await Post.findOne({ slug: req.params.slug });

  res.status(200).json(post);
};

export const createPost = async (req, res) => {
  const clerkUserId = req.auth?.userId;

  console.log(req.headers);

  if (!clerkUserId) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const user = await User.findOne({ clerkUserId });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  let slug = req.body.title.replace(/ /g, "-").toLowerCase();

  let existingPost = await Post.findOne({ slug });

  let counter = 2;

  while (existingPost) {
    slug = `${slug}-${counter}`;
    existingPost = await Post.findOne({ slug });
    counter++;
  }

  const { user: ignoredUser, ...postData } = req.body;

  const newPost = new Post({
    user: user._id,
    slug,
    ...postData,
  });

  const post = await newPost.save();

  res.status(200).json({ message: "Post created successfully", post });
};

export const deletePost = async (req, res) => {
  const clerkUserId = req.auth.userId;

  if (!clerkUserId) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const user = await User.findOne({ clerkUserId });

  const deletepost = await Post.findOneAndDelete({
    _id: req.params.id,
    user: user._id,
  });

  if (!deletepost) {
    return res.status(404).json({ message: "Post not found" });
  }

  res.status(200).json({ message: "Post deleted successfully" });
};
