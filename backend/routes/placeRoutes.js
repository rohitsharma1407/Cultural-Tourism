const express = require('express');
const Place = require('../models/Place');
const router = express.Router();  // <-- Add this line

// Get all places
router.get('/places', async (req, res) => {
  try {
    const places = await Place.find();
    res.json(places);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get single place by ID
router.get('/places/:id', async (req, res) => {
  try {
    const place = await Place.findById(req.params.id);
    res.json(place);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a new place
router.post('/places', async (req, res) => {
  const { name, description, location } = req.body;
  try {
    const newPlace = new Place({ name, description, location });
    await newPlace.save();
    res.status(201).json(newPlace);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
