import { useNavigate } from "react-router-dom";

export default function PatientSidebar() {

  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem("role");

    navigate("/login");
  };

  return (

    <div className="sidebar">

      <div>

        <h2>Patient</h2>

        <ul>

          <li onClick={() => navigate("/patient-dashboard")}>
            Dashboard
          </li>

          <li onClick={() => navigate("/patient-appointments")}>
            Appointments
          </li>

          <li onClick={() => navigate("/patient-prescriptions")}>
            Prescriptions
          </li>

          <li onClick={() => navigate("/patient-medical-history")}>
            Medical History
          </li>

          <li onClick={() => navigate("/patient-reports")}>
            Reports
          </li>

        </ul>

      </div>

      <button
        className="logout-btn"
        onClick={handleLogout}
      >
        Logout
      </button>

    </div>
  );
}