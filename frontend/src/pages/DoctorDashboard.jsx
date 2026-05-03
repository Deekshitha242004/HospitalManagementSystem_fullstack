import { useNavigate } from "react-router-dom";
import "./Doctordashboard.css";

export default function DoctorDashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const appointments = [
    { name: "John Doe", time: "10:00 AM" },
    { name: "Jane Smith", time: "11:30 AM" },
    { name: "David Lee", time: "1:00 PM" }
  ];

  return (
    <div className="doctor-container">

      {/* SIDEBAR */}
      <div className="sidebar">

        <div>
          <h2>Doctor</h2>

          <ul>
            <li>Dashboard</li>
            <li>Appointments</li>
            <li>Patients</li>
          </ul>
        </div>

        <button className="logout-btn" onClick={logout}>
          Logout
        </button>

      </div>

      {/* MAIN */}
      <div className="main">

        {/* TOPBAR */}
        <div className="topbar">
          <h2>Doctor Dashboard</h2>
        </div>

        {/* CARDS */}
        <div className="cards">

          <div className="card blue">
            Today Patients
            <h3>12</h3>
          </div>

          <div className="card green">
            Appointments
            <h3>8</h3>
          </div>

          <div className="card orange">
            Completed
            <h3>5</h3>
          </div>

          <div className="card pink">
            Pending
            <h3>3</h3>
          </div>

        </div>

        {/* BOTTOM SECTION */}
        <div className="bottom-section">

          {/* APPOINTMENTS */}
          <div className="chart-box">
            <h4>Today's Appointments</h4>

            {appointments.map((item, index) => (
              <div key={index} className="appointment-card">
                <span>{item.name}</span>
                <span>{item.time}</span>
              </div>
            ))}

          </div>

          {/* PATIENT LIST */}
          <div className="users">
            <h4>Patient List</h4>

            <ul>
              <li>John Doe</li>
              <li>Jane Smith</li>
              <li>David Lee</li>
              <li>Emily Clark</li>
            </ul>

          </div>

        </div>

      </div>

    </div>
  );
}