const mongoose = require("mongoose");

const AdventureSchema = new mongoose.Schema({
  name: String,
  description: String,
  location: String,
  image: String,
});

module.exports = mongoose.model("Adventure", AdventureSchema);

