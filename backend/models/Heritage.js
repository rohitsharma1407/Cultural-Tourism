const mongoose = require("mongoose");

const HeritageSchema = new mongoose.Schema({
  name: String,
  description: String,
  location: String,
  image: String,
});

module.exports = mongoose.model("Heritage", HeritageSchema);
