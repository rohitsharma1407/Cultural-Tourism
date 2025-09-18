const mongoose = require("mongoose");

const ReligiousSchema = new mongoose.Schema({
  name: String,
  description: String,
  location: String,
  image: String,
});

module.exports = mongoose.model("Religious", ReligiousSchema);
