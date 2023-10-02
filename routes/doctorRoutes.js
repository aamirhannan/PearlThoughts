const express = require("express");
const router = express.Router();
const doctorController = require("../controllers/doctorController");
const Doctor = require('../models/doctorSchema.js')

router.get("/doctors", doctorController.getAllDoctors);
router.get("/doctors/:id", doctorController.getDoctorDetails);

router.post("/doctors/seed", async (req, res) => {
  try {
    // Create an array of 50 temporary doctor data
    const tempDoctors = [];

    for (let i = 1; i <= 50; i++) {
      const doctorData = {
        name: `Doctor ${i}`,
        specialization: `Specialization ${i}`,
        // Add other doctor-related fields as needed
      };

      tempDoctors.push(doctorData);
    }

    // Insert the temporary doctor data into the database
    const insertedDoctors = await Doctor.insertMany(tempDoctors);

    // Return a success response with the inserted doctor data
    res
      .status(201)
      .json({
        message: "Temporary doctors data inserted successfully",
        doctors: insertedDoctors,
      });
  } catch (error) {
    console.error("Error inserting temporary doctors data:", error);
    res.status(500).json({ error: "Unable to insert temporary doctors data" });
  }
});



module.exports = router;
