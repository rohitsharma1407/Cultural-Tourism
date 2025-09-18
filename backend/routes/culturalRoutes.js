import express from "express";
import Alert from "../models/Alert.js";

const router = express.Router();

// GET all alerts
router.get("/", async (req, res) => {
  try {
    const alerts = await Alert.find().sort({ createdAt: -1 });
    res.json(alerts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST new alert
router.post("/", async (req, res) => {
  try {
    const newAlert = new Alert(req.body);
    await newAlert.save();
    res.json(newAlert);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// export default router;
module.exports = router;