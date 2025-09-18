import express from "express";
import Discover from "../models/Discover.js";

const router = express.Router();

// Get all
router.get("/", async (req, res) => {
  const data = await Discover.find();
  res.json(data);
});

// Add new
router.post("/", async (req, res) => {
  const newItem = new Discover(req.body);
  await newItem.save();
  res.json(newItem);
});

// export default router;
module.exports = router;