import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Doctordashboard.css";

export default function DoctorDashboard() {
  const navigate = useNavigate();

  const [patients, setPatients] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [activePage, setActivePage] = useState("dashboard");

  useEffect(() => {
    fetch("http://localhost:8080/patients")
      .then((res) => res.json())
      .then((data) => setPatients(data))
      .catch((err) => console.log(err));

    fetch("http://localhost:8080/appointments")
      .then((res) => res.json())
      .then((data) => setAppointments(data))
      .catch((err) => console.log(err));
  }, []);

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="doctor-container">

      {/* SIDEBAR */}
      <div className="sidebar">

        <div>
          <h2>Doctor</h2>

          <ul>
            <li onClick={() => setActivePage("dashboard")}>
              Dashboard
            </li>

            <li onClick={() => setActivePage("appointments")}>
              Appointments
            </li>

            <li onClick={() => setActivePage("patients")}>
              Patients
            </li>
          </ul>
        </div>

        <button className="logout-btn" onClick={logout}>
          Logout
        </button>

      </div>

      {/* MAIN */}
      <div className="main">

        <div className="topbar">
          <h2>Doctor Dashboard</h2>
        </div>

        {/* DASHBOARD PAGE */}
        {activePage === "dashboard" && (
          <>
            <div className="cards">

              <div className="card blue">
                Total Patients
                <h3>{patients.length}</h3>
              </div>

              <div className="card green">
                Total Appointments
                <h3>{appointments.length}</h3>
              </div>

              <div className="card orange">
                Today's Patients
                <h3>{patients.length}</h3>
              </div>

              <div className="card pink">
                Doctors
                <h3>-</h3>
              </div>

            </div>

            <div className="bottom-section">

              {/* Recent Appointments */}
              <div className="chart-box">

                <h4>Recent Appointments</h4>

                {appointments.slice(0, 5).map((appointment) => (
                  <div
                    key={appointment.appointmentId}
                    className="appointment-card"
                  >
                    <span>{appointment.patientName}</span>
                    <span>{appointment.appointmentDate}</span>
                  </div>
                ))}

              </div>

              {/* Patient List */}
              <div className="users">

                <h4>Patient List</h4>

                <ul>
                  {patients.slice(0, 5).map((patient) => (
                    <li key={patient.patientId}>
                      {patient.patientName}
                    </li>
                  ))}
                </ul>

              </div>

            </div>
          </>
        )}

        {/* APPOINTMENTS PAGE */}
        {activePage === "appointments" && (
          <div className="users">

            <h3>Appointments</h3>

            <table className="table">

              <thead>
                <tr>
                  <th>ID</th>
                  <th>Patient</th>
                  <th>Doctor</th>
                  <th>Date</th>
                </tr>
              </thead>

              <tbody>

                {appointments.map((appointment) => (
                  <tr key={appointment.appointmentId}>
                    <td>{appointment.appointmentId}</td>
                    <td>{appointment.patientName}</td>
                    <td>{appointment.doctorName}</td>
                    <td>{appointment.appointmentDate}</td>
                  </tr>
                ))}

              </tbody>

            </table>

          </div>
        )}

        {/* PATIENTS PAGE */}
        {activePage === "patients" && (
          <div className="users">

            <h3>Patients</h3>

            <table className="table">

              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Gender</th>
                </tr>
              </thead>

              <tbody>

                {patients.map((patient) => (
                  <tr key={patient.patientId}>
                    <td>{patient.patientId}</td>
                    <td>{patient.patientName}</td>
                    <td>{patient.patientAge}</td>
                    <td>{patient.patientGender}</td>
                  </tr>
                ))}

              </tbody>

            </table>

          </div>
        )}

      </div>

    </div>
  );
}