# PearlThoughts
Assignment Routes Details

- GET /doctors
  - Description: Retrieve a list of all doctors.
  
- GET /doctors/:id
  - Description: Retrieve details of an individual doctor.
  - Parameters:
    - :id (string) - The unique identifier of the doctor.
  
- GET /doctors/:id/appointments
  - Description: Retrieve all appointments booked with a specific doctor.
  - Parameters:
    - :id (string) - The unique identifier of the doctor.
  
- POST /doctors/:id/appointments
  - Description: Book an appointment with a specific doctor.
  - Parameters:
    - :id (string) - The unique identifier of the doctor.
  - Request Body:
    - JSON data containing appointment details (e.g., patient name, appointment time).

