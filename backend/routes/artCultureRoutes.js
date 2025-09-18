import express from "express";
import ArtCulture from "../models/ArtCulture.js";

const router = express.Router();

// Get all
router.get("/", async (req, res) => {
  const data = await ArtCulture.find();
  res.json(data);
});

// Add new
router.post("/", async (req, res) => {
  const newItem = new ArtCulture(req.body);
  await newItem.save();
  res.json(newItem);
});

// export default router;

module.exports = router;