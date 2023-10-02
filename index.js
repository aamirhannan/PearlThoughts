  const express = require("express");
  const mongoose = require("mongoose");
  const bodyParser = require("body-parser");
  const doctorRoutes = require("./routes/doctorRoutes");
  const appointmentRoutes = require("./routes/appointmentRoutes");

  const app = express();
  const PORT = process.env.PORT || 3000;

  // Connect to your MongoDB database
  // mongoose.connect(
  //   "mongodb+srv://admin:admin@cluster0.glhpfhm.mongodb.net/?retryWrites=true&w=majority",
  //   {
  //     useNewUrlParser: true,
  //     useUnifiedTopology: true,
  //   }
  // );

  try {
    mongoose.connect(
      "mongodb+srv://admin:admin@cluster0.glhpfhm.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }

    );
  } catch (error) {
    console.error("Error connecting to the MongoDB:", error);
  }

  // Middleware to parse JSON in requests
  app.use(bodyParser.json());

  // Use doctorRoutes for doctor-related routes
  app.use("/api", doctorRoutes);

  // Use appointmentRoutes for appointment-related routes
  app.use("/api", appointmentRoutes);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

  

