const mongoose = require("mongoose");

const touristSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String },
  address: { type: String },
  dateRegistered: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Tourist", touristSchema);
