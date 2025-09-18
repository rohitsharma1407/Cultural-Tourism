import express from "express";
import Museum from "../models/Museum.js";

const router = express.Router();

// Get all
router.get("/", async (req, res) => {
  const data = await Museum.find();
  res.json(data);
});

// Add new
router.post("/", async (req, res) => {
  const newItem = new Museum(req.body);
  await newItem.save();
  res.json(newItem);
});

// export default router;
module.exports = router;
