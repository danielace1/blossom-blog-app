import express from "express";
import userRouter from "./routes/user.route.js";

const app = express();
const PORT = process.env.PORT;

app.use("/users", userRouter);

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

app.listen(PORT, (req, res) => {
  console.log("Server is running on port 3000");
});
