const mongoose = require("mongoose");

const ArtCultureSchema = new mongoose.Schema({
  name: String,
  description: String,
  location: String,
  image: String,
});

module.exports = mongoose.model("ArtCulture", ArtCultureSchema);

