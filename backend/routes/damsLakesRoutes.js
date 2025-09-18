import express from "express";
import DamsLakes from "../models/DamsLakes.js";

const router = express.Router();

// Get all
router.get("/", async (req, res) => {
  const data = await DamsLakes.find();
  res.json(data);
});

// Add new
router.post("/", async (req, res) => {
  const newItem = new DamsLakes(req.body);
  await newItem.save();
  res.json(newItem);
});

// export default router;

module.exports = router;
