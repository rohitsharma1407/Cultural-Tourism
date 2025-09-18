const mongoose = require("mongoose");

const DamsLakesSchema = new mongoose.Schema({
  name: String,
  description: String,
  location: String,
  image: String,
});

module.exports = mongoose.model("DamsLakes", DamsLakesSchema);

