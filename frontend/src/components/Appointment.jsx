import { useState, useEffect } from "react";
import "./Appointment.css";

function Appointment() {

  const [patientName, setPatientName] = useState("");
  const [patientAge, setPatientAge] = useState("");
  const [patientGender, setPatientGender] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [disease, setDisease] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");

  const [doctors, setDoctors] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");

  // Fetch all doctors
  useEffect(() => {
    fetch("http://localhost:8080/doctors")
      .then((response) => response.json())
      .then((data) => setDoctors(data))
      .catch((error) => console.log(error));
  }, []);

  const handleSubmit = async (e) => {

    e.preventDefault();

    const data = {
      patientName,
      patientAge: Number(patientAge),
      patientGender,
      doctorName,
      disease,
      appointmentDate
    };

    try {

      const response = await fetch(
        "http://localhost:8080/appointments",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        }
      );

      if (response.ok) {

        setSuccessMessage(
          "✅ Appointment Booked Successfully!"
        );

        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);

        setPatientName("");
        setPatientAge("");
        setPatientGender("");
        setDoctorName("");
        setDisease("");
        setAppointmentDate("");

      } else {

        const errorText = await response.text();
        alert(errorText);

      }

    } catch (error) {

      alert(error.message);

    }
  };

  return (
    <div className="appointment-page">

      <div className="appointment-card">

        <h2 className="appointment-title">
          🏥 Book Appointment
        </h2>

        {successMessage && (
          <div className="success-alert">
            {successMessage}
          </div>
        )}

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Patient Name"
            value={patientName}
            onChange={(e) =>
              setPatientName(e.target.value)
            }
            required
          />

          <input
            type="number"
            placeholder="Patient Age"
            value={patientAge}
            onChange={(e) =>
              setPatientAge(e.target.value)
            }
            required
          />

          <input
            type="text"
            placeholder="Patient Gender"
            value={patientGender}
            onChange={(e) =>
              setPatientGender(e.target.value)
            }
            required
          />

          <select
            value={doctorName}
            onChange={(e) =>
              setDoctorName(e.target.value)
            }
            required
          >
            <option value="">
              Select Doctor
            </option>

            {doctors.map((doctor) => (
              <option
                key={doctor.doctorId}
                value={doctor.doctorName}
              >
                {doctor.doctorName}
              </option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Disease"
            value={disease}
            onChange={(e) =>
              setDisease(e.target.value)
            }
            required
          />

          <input
            type="date"
            value={appointmentDate}
            onChange={(e) =>
              setAppointmentDate(
                e.target.value
              )
            }
            required
          />

          <button
            className="book-btn"
            type="submit"
          >
            Book Appointment
          </button>

        </form>

      </div>

    </div>
  );
}

export default Appointment;