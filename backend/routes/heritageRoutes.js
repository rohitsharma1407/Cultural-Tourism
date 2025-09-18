import express from "express";
import Heritage from "../models/Heritage.js";

const router = express.Router();

// Get all
router.get("/", async (req, res) => {
  const data = await Heritage.find();
  res.json(data);
});

// Add new
router.post("/", async (req, res) => {
  const newItem = new Heritage(req.body);
  await newItem.save();
  res.json(newItem);
});

// export default router;
module.exports = router;
