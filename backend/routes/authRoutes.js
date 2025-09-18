const express = require("express");
const bcrypt = require("bcrypt");
const Tourist = require("../models/Tourist");
const router = express.Router();

// REGISTER Tourist
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;

    const existing = await Tourist.findOne({ email });
    if (existing) return res.status(400).json({ message: "Email already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newTourist = new Tourist({
      name,
      email,
      password: hashedPassword,
      phone,
      address
    });

    await newTourist.save();
    res.status(201).json({ message: "Registered Successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// LOGIN Tourist
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const tourist = await Tourist.findOne({ email });

    if (!tourist) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, tourist.password);

    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    res.json({
      message: "Login successful",
      tourist: { id: tourist._id, name: tourist.name, email: tourist.email }
    });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// FORGOT PASSWORD
router.post("/forgot-password", async (req, res) => {
  try {
    const { email, newPassword } = req.body;
    const tourist = await Tourist.findOne({ email });

    if (!tourist) return res.status(400).json({ message: "User not found" });

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    tourist.password = hashedPassword;
    await tourist.save();

    res.json({ message: "Password reset successful" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
