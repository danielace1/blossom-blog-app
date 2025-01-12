import express from "express";
import connectDB from "./lib/connectDB.js";
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";
import commentRouter from "./routes/comment.route.js";

const app = express();
const PORT = process.env.PORT;

app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

app.listen(PORT, (req, res) => {
  connectDB();
  console.log("Server is running on port 3000");
});
