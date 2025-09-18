import express from "express";
import Eco from "../models/Eco.js";

const router = express.Router();

// Get all
router.get("/", async (req, res) => {
  const data = await Eco.find();
  res.json(data);
});

// Add new
router.post("/", async (req, res) => {
  const newItem = new Eco(req.body);
  await newItem.save();
  res.json(newItem);
});

// export default router;
module.exports = router;