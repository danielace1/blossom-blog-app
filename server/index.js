import express from "express";
import cors from "cors";
import "dotenv/config";
import { clerkMiddleware } from "@clerk/express";
import connectDB from "./lib/connectDB.js";
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";
import commentRouter from "./routes/comment.route.js";
import webHookRouter from "./routes/webhook.route.js";

const app = express();
const PORT = process.env.PORT;

app.use(
  cors({
    origin: ["http://localhost:5173", "https://blossom-blog-app.onrender.com"],
    credentials: true,
  })
);
app.use(clerkMiddleware());
app.use("/webhooks", webHookRouter);

app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// app.get("/protected", (req, res) => {
//   const { userId } = req.auth;
//   if (!userId) {
//     return res.status(401).json({ message: "Unauthorized" });
//   }
//   res.json({ message: "Protected route", userId });
// });

app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  console.log(error.message);
  res.json({
    message: error.message || "Something went wrong",
    status: error.status || 500,
    stack: error.stack,
  });
  next();
});

app.listen(PORT, (req, res) => {
  connectDB();
  console.log("Server is running on port 5000");
});
