import { useEffect, useState } from "react";
import axios from "axios";

import PatientSidebar from "../components/Sidebar";

import "../styles/PatientLayout.css";

export default function PatientAppointments() {

  const [appointments, setAppointments] = useState([]);

  const patientId = 1;

  useEffect(() => {

    fetchAppointments();

  }, []);

  const fetchAppointments = async () => {

    try {

      const response = await axios.get(
        `http://localhost:8080/appointments/patient/${patientId}`
      );

      setAppointments(response.data);

    } catch (error) {

      console.log(error);
    }
  };

  return (

    <div className="page-container">

      <PatientSidebar />

      <div className="main-content">

        <div className="topbar">
          <h1>Appointments</h1>
        </div>

        {appointments.length > 0 ? (

          appointments.map((appointment) => (

            <div
              className="info-card"
              key={appointment.appointmentId}
            >

              <h2 className="card-title">
                Appointment Details
              </h2>

              <div className="info-row">
                <div className="info-key">
                  Appointment Date
                </div>

                <div className="info-value">
                  {appointment.appointmentDate}
                </div>
              </div>

              <div className="info-row">
                <div className="info-key">
                  Patient Name
                </div>

                <div className="info-value">
                  {appointment.patientName}
                </div>
              </div>

              <div className="info-row">
                <div className="info-key">
                  Doctor Name
                </div>

                <div className="info-value">
                  {appointment.doctorName}
                </div>
              </div>

            </div>

          ))

        ) : (

          <div className="empty-box">
            No Appointments Found
          </div>

        )}

      </div>

    </div>
  );
}