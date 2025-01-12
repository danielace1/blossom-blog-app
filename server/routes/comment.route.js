import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("comment routes");
});

export default router;
