const mongoose = require("mongoose");

const SpiritualSchema = new mongoose.Schema({
  name: String,
  description: String,
  location: String,
  image: String,
});

module.exports = mongoose.model("Spiritual", SpiritualSchema);
