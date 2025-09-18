import express from "express";
import Adventure from "../models/Adventure.js";

const router = express.Router();

// Get all
router.get("/", async (req, res) => {
  const data = await Adventure.find();
  res.json(data);
});

// Add new
router.post("/", async (req, res) => {
  const newItem = new Adventure(req.body);
  await newItem.save();
  res.json(newItem);
});

// export default router;
module.exports = router;