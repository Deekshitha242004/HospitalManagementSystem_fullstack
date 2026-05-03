import { useNavigate } from "react-router-dom";
import "./Admindashboard.css";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

const data = [
  { name: "Jan", patients: 40 },
  { name: "Feb", patients: 60 },
  { name: "Mar", patients: 80 },
  { name: "Apr", patients: 50 }
];

export default function AdminDashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="admin-container">

      {/* SIDEBAR */}
      <div className="sidebar">

        <div>
          <h2>Admin</h2>

          <ul>
            <li>Dashboard</li>
            <li>Manage Doctors</li>
            <li>Manage Patients</li>
            <li>Staff</li>
            <li>Reports</li>
          </ul>
        </div>

        <button className="logout-btn" onClick={logout}>
          Logout
        </button>

      </div>

      {/* MAIN */}
      <div className="main">

        <div className="topbar">
          <h2>Admin Dashboard</h2>
        </div>

        <div className="cards">
          <div className="card blue">Total Doctors <h3>20</h3></div>
          <div className="card green">Total Patients <h3>150</h3></div>
          <div className="card orange">Staff <h3>25</h3></div>
          <div className="card pink">Appointments <h3>120</h3></div>
        </div>

        <div className="bottom-section">

          <div className="chart-box">
            <h4>Reports Overview</h4>

            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="patients" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="users">
            <h4>Recent Users</h4>
            <ul>
              <li>John - Doctor</li>
              <li>Jane - Patient</li>
              <li>Emily - Staff</li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
}