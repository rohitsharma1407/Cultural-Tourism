import express from "express";
import Rural from "../models/Rural.js";

const router = express.Router();

// Get all
router.get("/", async (req, res) => {
  const data = await Rural.find();
  res.json(data);
});

// Add new
router.post("/", async (req, res) => {
  const newItem = new Rural(req.body);
  await newItem.save();
  res.json(newItem);
});

// export default router;

module.exports = router;
