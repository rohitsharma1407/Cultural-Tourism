const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  location: String,
});

module.exports = mongoose.model('Place', placeSchema);
