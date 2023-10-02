const mongoose = require("mongoose");
const { Schema } = mongoose;

const appointmentSchema = new Schema({
  doctor: { type: Schema.Types.ObjectId, ref: "Doctor" },
  patientName: { type: String, required: true },
  appointmentTime: { type: Date, required: true },
  // Add other appointment-related fields as needed
});

module.exports = mongoose.model("Appointment", appointmentSchema);
