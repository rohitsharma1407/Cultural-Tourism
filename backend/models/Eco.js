const mongoose = require("mongoose");

const EcoSchema = new mongoose.Schema({
  name: String,
  description: String,
  location: String,
  image: String,
});

module.exports = mongoose.model("Eco", EcoSchema);
