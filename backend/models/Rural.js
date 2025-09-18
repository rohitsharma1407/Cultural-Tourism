const mongoose = require("mongoose");

const RuralSchema = new mongoose.Schema({
  name: String,
  description: String,
  location: String,
  image: String,
});

module.exports = mongoose.model("Rural", RuralSchema);
