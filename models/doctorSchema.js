const mongoose = require("mongoose");
const { Schema } = mongoose;

const doctorSchema = new Schema({
  name: { type: String, required: true },
  specialization: { type: String, required: true },
  // Add other doctor-related fields as needed
});

module.exports = mongoose.model("Doctor", doctorSchema);
