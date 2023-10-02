const express = require("express");
const router = express.Router();
const appointmentController = require("../controllers/appointmentControler.js");

router.get(
  "/doctors/:id/appointments",
  appointmentController.getAppointmentsForDoctor
);
router.post(
  "/doctors/:id/appointments",
  appointmentController.createAppointment
);

module.exports = router;
