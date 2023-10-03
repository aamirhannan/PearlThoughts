const Appointment = require("../models/appointmentSchema");
const Doctor = require("../models/doctorSchema");

exports.getAppointmentsForDoctor = async (req, res) => {
  try {
    const doctorId = req.params.id;
    // --------------------------------------------------//
    //checking if that doctor Exist, only the wwe will make the appointment.
    const existingDoctor = await Doctor.findById(doctorId);
    if (!existingDoctor) {
      return res
        .status(400)
        .json({ error: "The selected doctor doesn't exist" });
    }
    //---------------------------------------------------//

    const appointments = await Appointment.find({ doctor: doctorId });
    const appointmentsSize = appointments.length;
    res.json({ appointments, Total_Appointment: appointmentsSize });

  } catch (error) {
    console.error("Error fetching appointments for doctor:", error);
    res.status(500).json({ error: "Unable to fetch appointments for doctor" });
  }
};
exports.createAppointment = async (req, res) => {
  try {
    const doctorId = req.params.id;
    const { patientName, appointmentTime } = req.body;

    // --------------------------------------------------//
    //checking if that doctor Exist, only the wwe will make the appointment.
    const existingDoctor = await Doctor.findById(doctorId);
    if (!existingDoctor) {
      return res
        .status(400)
        .json({ error: "The selected doctor doesn't exist" });
    }

    //---------------------------------------------------//
    //checking Doctors Limit, If he is already booked for Maimum capacity.
    const maxAppointmentsPerDoctor = 5;

    const existingAppointmentsCount = await Appointment.countDocuments({
      doctor: doctorId,
    });

    if (existingAppointmentsCount >= maxAppointmentsPerDoctor) {
      return res
        .status(400)
        .json({ error: "Doctor has reached the maximum appointments allowed" });
    }

    //-------------------------------------------------------/
    //checking the appointment date, if its sunday.
    const dayOfWeek = new Date(appointmentTime).getDay();
    if (dayOfWeek === 0) {
      return res.status(400).json({ error: "Doctors don't work on Sundays" });
    }
    //-------------------------------------------------------/
    //if notheing fails then we are booking the apoointment for that day.
    const newAppointment = new Appointment({
      doctor: doctorId,
      patientName,
      appointmentTime,
    });

    await newAppointment.save();
    res.status(201).json({
      message: "Appointment created successfully",
      appointment: newAppointment,
    });
  } catch (error) {
    console.error("Error creating appointment:", error);
    res.status(500).json({ error: "Unable to create appointment" });
  }
};
