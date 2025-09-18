import express from "express";
import Religious from "../models/Religious.js";

const router = express.Router();

// Get all
router.get("/", async (req, res) => {
  const data = await Religious.find();
  res.json(data);
});

// Add new
router.post("/", async (req, res) => {
  const newItem = new Religious(req.body);
  await newItem.save();
  res.json(newItem);
});

// export default router;

module.exports = router;
