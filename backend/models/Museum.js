const mongoose = require("mongoose");

const MuseumSchema = new mongoose.Schema({
  name: String,
  description: String,
  location: String,
  image: String,
});

module.exports = mongoose.model("Museum", MuseumSchema);
