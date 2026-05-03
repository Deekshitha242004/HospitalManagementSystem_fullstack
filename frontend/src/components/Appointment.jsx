import { useState } from "react";
import "./Appointment.css";

function Appointment() {
  const [patientId, setPatientId] = useState("");
  const [doctorId, setDoctorId] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      patientId: Number(patientId),
      doctorId: Number(doctorId),
      appointmentDate
    };

    try {
      const response = await fetch("http://localhost:8080/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        alert("Appointment Booked Successfully!");
        setPatientId("");
        setDoctorId("");
        setAppointmentDate("");
      } else {
        const errorData = await response.json();
        alert("Error booking appointment: " + errorData.message);
      }
    } catch (error) {
      alert("Network error: " + error.message);
    }
  };

  return (
    <div className="appointment-page">
      <div className="appointment-card">
        <h2 className="title">Book Appointment</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="patientId">Patient ID</label>
            <input
              id="patientId"
              type="number"
              value={patientId}
              onChange={(e) => setPatientId(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="doctorId">Doctor ID</label>
            <input
              id="doctorId"
              type="number"
              value={doctorId}
              onChange={(e) => setDoctorId(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="appointmentDate">Appointment Date</label>
            <input
              id="appointmentDate"
              type="date"
              value={appointmentDate}
              onChange={(e) => setAppointmentDate(e.target.value)}
              required
            />
          </div>

          <button className="book-btn" type="submit">
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
}

export default Appointment;