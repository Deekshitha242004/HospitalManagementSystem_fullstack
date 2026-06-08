import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import PatientSidebar from "../components/Sidebar";

import "./Patientdashboard.css";

export default function PatientDashboard() {

  const navigate = useNavigate();

  // STATES
  const [appointments, setAppointments] = useState([]);
  const [prescriptions, setPrescriptions] = useState([]);
  const [reports, setReports] = useState([]);
  const [activities, setActivities] = useState([]);

  // SAMPLE PATIENT ID
  const patientId = 1;

  // FETCH ALL DATA
  useEffect(() => {

    fetchAppointments();
    fetchPrescriptions();
    fetchReports();
    fetchActivities();

  }, []);

  // FETCH APPOINTMENTS
  const fetchAppointments = async () => {

    try {

      const response = await axios.get(
        `http://localhost:8080/appointments/patient/${patientId}`
      );

      setAppointments(response.data);

    } catch (error) {

      console.log("Appointment Error:", error);
    }
  };

  // FETCH PRESCRIPTIONS
  const fetchPrescriptions = async () => {

    try {

      const response = await axios.get(
        `http://localhost:8080/patient-prescription/${patientId}`
      );

      setPrescriptions(response.data);

    } catch (error) {

      console.log("Prescription Error:", error);
    }
  };

  // FETCH REPORTS
  const fetchReports = async () => {

    try {

      const response = await axios.get(
        `http://localhost:8080/patient-report/${patientId}`
      );

      setReports(response.data);

    } catch (error) {

      console.log("Report Error:", error);
    }
  };

  // FETCH ACTIVITIES
  const fetchActivities = async () => {

    try {

      const response = await axios.get(
        `http://localhost:8080/patient-activity/${patientId}`
      );

      setActivities(response.data);

    } catch (error) {

      console.log("Activity Error:", error);
    }
  };

  return (

    <div className="patient-container">

      {/* REUSABLE SIDEBAR */}
      <PatientSidebar />

      {/* MAIN CONTENT */}
      <div className="main">

        {/* TOPBAR */}
        <div className="topbar">

          <h2>Patient Dashboard</h2>

        </div>

        {/* DASHBOARD CARDS */}
        <div className="cards">

          <div
            className="card blue"
            onClick={() => navigate("/patient-appointments")}
          >
            Upcoming Appointments

            <h3>{appointments.length}</h3>
          </div>

          <div
            className="card green"
            onClick={() => navigate("/patient-prescriptions")}
          >
            Prescriptions

            <h3>{prescriptions.length}</h3>
          </div>

          <div
            className="card orange"
            onClick={() => navigate("/patient-reports")}
          >
            Reports

            <h3>{reports.length}</h3>
          </div>

        </div>

        {/* BOTTOM SECTION */}
        <div className="bottom-section">

          {/* QUICK ACTIONS */}
          <div className="chart-box">

            <h4>Quick Actions</h4>

            <button
              className="action-btn"
              onClick={() => navigate("/patient-appointments")}
            >
              Book Appointment
            </button>

            <button
              className="action-btn"
              onClick={() => navigate("/patient-prescriptions")}
            >
              View Prescriptions
            </button>

            <button
              className="action-btn"
              onClick={() => navigate("/patient-medical-history")}
            >
              Medical History
            </button>

          </div>

          {/* RECENT ACTIVITIES */}
          <div className="users">

            <h4>Recent Activity</h4>

            <ul>

              {activities.length > 0 ? (

                activities.map((activity) => (

                  <li key={activity.id}>

                    {activity.description}

                  </li>

                ))

              ) : (

                <li>No recent activity</li>

              )}

            </ul>

          </div>

        </div>

      </div>

    </div>
  );
}



// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import "./Patientdashboard.css";

// export default function PatientDashboard() {

//   const navigate = useNavigate();

//   // STATES
//   const [appointments, setAppointments] = useState([]);
//   const [prescriptions, setPrescriptions] = useState([]);
//   const [reports, setReports] = useState([]);
//   const [activities, setActivities] = useState([]);

//   // SAMPLE PATIENT ID
//   const patientId = 1;

//   // FETCH ALL DATA
//   useEffect(() => {

//     fetchAppointments();
//     fetchPrescriptions();
//     fetchReports();
//     fetchActivities();

//   }, []);

//   // FETCH APPOINTMENTS
//   const fetchAppointments = async () => {

//     try {

//       const response = await axios.get(
//         `http://localhost:8080/appointments/patient/${patientId}`
//       );

//       setAppointments(response.data);

//     } catch (error) {

//       console.log("Appointment Error:", error);
//     }
//   };

//   // FETCH PRESCRIPTIONS
//   const fetchPrescriptions = async () => {

//     try {

//       const response = await axios.get(
//         `http://localhost:8080/patient-prescription/${patientId}`
//       );

//       setPrescriptions(response.data);

//     } catch (error) {

//       console.log("Prescription Error:", error);
//     }
//   };

//   // FETCH REPORTS
//   const fetchReports = async () => {

//     try {

//       const response = await axios.get(
//         `http://localhost:8080/patient-report/${patientId}`
//       );

//       setReports(response.data);

//     } catch (error) {

//       console.log("Report Error:", error);
//     }
//   };

//   // FETCH ACTIVITIES
//   const fetchActivities = async () => {

//     try {

//       const response = await axios.get(
//         `http://localhost:8080/patient-activity/${patientId}`
//       );

//       setActivities(response.data);

//     } catch (error) {

//       console.log("Activity Error:", error);
//     }
//   };

//   // LOGOUT
//   const handleLogout = () => {

//     localStorage.removeItem("role");

//     navigate("/login");
//   };

//   return (

//     <div className="patient-container">

//       {/* SIDEBAR */}
//       <div className="sidebar">

//         <div>

//           <h2>Patient</h2>

//           <ul>

//             <li onClick={() => navigate("/patient-dashboard")}>
//               Dashboard
//             </li>

//             <li onClick={() => navigate("/patient-appointments")}>
//               Appointments
//             </li>

//             <li onClick={() => navigate("/patient-prescriptions")}>
//               Prescriptions
//             </li>

//             <li onClick={() => navigate("/patient-medical-history")}>
//               Medical History
//             </li>

//             <li onClick={() => navigate("/patient-reports")}>
//               Reports
//             </li>

//           </ul>

//         </div>

//         <button
//           className="logout-btn"
//           onClick={handleLogout}
//         >
//           Logout
//         </button>

//       </div>

//       {/* MAIN CONTENT */}
//       <div className="main">

//         {/* TOPBAR */}
//         <div className="topbar">

//           <h2>Patient Dashboard</h2>

//         </div>

//         {/* DASHBOARD CARDS */}
//         <div className="cards">

//           <div
//             className="card blue"
//             onClick={() => navigate("/patient-appointments")}
//           >
//             Upcoming Appointments

//             <h3>{appointments.length}</h3>
//           </div>

//           <div
//             className="card green"
//             onClick={() => navigate("/patient-prescriptions")}
//           >
//             Prescriptions

//             <h3>{prescriptions.length}</h3>
//           </div>

//           <div
//             className="card orange"
//             onClick={() => navigate("/patient-reports")}
//           >
//             Reports

//             <h3>{reports.length}</h3>
//           </div>

//         </div>

//         {/* BOTTOM SECTION */}
//         <div className="bottom-section">

//           {/* QUICK ACTIONS */}
//           <div className="chart-box">

//             <h4>Quick Actions</h4>

//             <button
//               className="action-btn"
//               onClick={() => navigate("/patient-appointments")}
//             >
//               Book Appointment
//             </button>

//             <button
//               className="action-btn"
//               onClick={() => navigate("/patient-prescriptions")}
//             >
//               View Prescriptions
//             </button>

//             <button
//               className="action-btn"
//               onClick={() => navigate("/patient-medical-history")}
//             >
//               Medical History
//             </button>

//           </div>

//           {/* RECENT ACTIVITIES */}
//           <div className="users">

//             <h4>Recent Activity</h4>

//             <ul>

//               {activities.length > 0 ? (

//                 activities.map((activity) => (

//                   <li key={activity.id}>

//                     {activity.description}

//                   </li>

//                 ))

//               ) : (

//                 <li>No recent activity</li>

//               )}

//             </ul>

//           </div>

//         </div>

//       </div>

//     </div>
//   );
// }