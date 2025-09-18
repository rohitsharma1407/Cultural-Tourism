const mongoose = require("mongoose");

const DiscoverSchema = new mongoose.Schema({
  name: String,
  description: String,
  location: String,
  image: String,
});

module.exports = mongoose.model("Discover", DiscoverSchema);
