import express from "express";
import Spiritual from "../models/Spiritual.js";

const router = express.Router();

// Get all
router.get("/", async (req, res) => {
  const data = await Spiritual.find();
  res.json(data);
});

// Add new
router.post("/", async (req, res) => {
  const newItem = new Spiritual(req.body);
  await newItem.save();
  res.json(newItem);
});

// export default router;

module.exports = router;
