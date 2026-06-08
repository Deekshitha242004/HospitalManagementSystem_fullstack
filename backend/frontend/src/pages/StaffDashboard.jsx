import { useNavigate } from "react-router-dom";
import "./StaffDashboard.css";

export default function StaffDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <div className="staff-container">

      {/* SIDEBAR */}
      <div className="sidebar">
        <div>
          <h2>Staff</h2>

          <ul>
            <li onClick={() => navigate("/staff-dashboard")}>Dashboard</li>
            <li>Appointments</li>
            <li>Doctors</li>
            <li>Patients</li>
          </ul>
        </div>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* MAIN */}
      <div className="main">

        {/* TOPBAR */}
        <div className="topbar">
          <h2>Staff Dashboard</h2>
        </div>

        {/* CARDS */}
        <div className="cards">
          <div className="card blue">
            Total Appointments
            <h3>20</h3>
          </div>

          <div className="card green">
            Doctors Available
            <h3>5</h3>
          </div>

          <div className="card orange">
            Patients Today
            <h3>12</h3>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="bottom-section">

          {/* TASKS */}
          <div className="chart-box">
            <h4>Tasks</h4>

            <button className="action-btn">Manage Appointments</button>
            <button className="action-btn">Assist Doctors</button>
            <button className="action-btn">Patient Records</button>
          </div>

          {/* ACTIVITY */}
          <div className="users">
            <h4>Recent Activity</h4>

            <ul>
              <li>Appointment scheduled</li>
              <li>Doctor assigned</li>
              <li>Patient record updated</li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
}