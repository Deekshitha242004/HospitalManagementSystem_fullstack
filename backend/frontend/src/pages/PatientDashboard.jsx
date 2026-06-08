import { useNavigate } from "react-router-dom";
import "./Patientdashboard.css";

export default function PatientDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <div className="patient-container">

      {/* SIDEBAR */}
      <div className="sidebar">
        <div>
          <h2>Patient</h2>

          <ul>
            <li onClick={() => navigate("/patient-dashboard")}>Dashboard</li>
            <li>Appointments</li>
            <li>Prescriptions</li>
            <li>Medical History</li>
          </ul>
        </div>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* MAIN CONTENT */}
      <div className="main">

        {/* TOPBAR */}
        <div className="topbar">
          <h2>Patient Dashboard</h2>
        </div>

        {/* CARDS */}
        <div className="cards">
          <div className="card blue">
            Upcoming Appointments
            <h3>2</h3>
          </div>

          <div className="card green">
            Prescriptions
            <h3>5</h3>
          </div>

          <div className="card orange">
            Reports
            <h3>3</h3>
          </div>
        </div>

        {/* FEATURES SECTION */}
        <div className="bottom-section">

          {/* ACTIONS */}
          <div className="chart-box">
            <h4>Quick Actions</h4>

            <button className="action-btn">Book Appointment</button>
            <button className="action-btn">View Prescriptions</button>
            <button className="action-btn">Medical History</button>
          </div>

          {/* INFO */}
          <div className="users">
            <h4>Recent Activity</h4>

            <ul>
              <li>Appointment booked with Dr. John</li>
              <li>Prescription updated</li>
              <li>Blood test report added</li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
}