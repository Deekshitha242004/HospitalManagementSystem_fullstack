import { useEffect, useState } from "react";
import axios from "axios";

import PatientSidebar from "../components/Sidebar";

import "../styles/PatientLayout.css";

export default function PatientMedicalHistory() {

  const [history, setHistory] = useState([]);

  const patientId = 1;

  useEffect(() => {

    fetchHistory();

  }, []);

  const fetchHistory = async () => {

    try {

      const response = await axios.get(
        `http://localhost:8080/patient-history/${patientId}`
      );

      setHistory(response.data);

    } catch (error) {

      console.log(error);
    }
  };

  return (

    <div className="page-container">

      <PatientSidebar />

      <div className="main-content">

        <div className="topbar">
          <h1>Medical History</h1>
        </div>

        {history.length > 0 ? (

          history.map((item) => (

            <div
              className="info-card"
              key={item.id}
            >

              <h2 className="card-title">
                History Details
              </h2>

              <div className="info-row">
                <div className="info-key">
                  Disease
                </div>

                <div className="info-value">
                  {item.disease}
                </div>
              </div>

              <div className="info-row">
                <div className="info-key">
                  Treatment
                </div>

                <div className="info-value">
                  {item.treatment}
                </div>
              </div>

            </div>

          ))

        ) : (

          <div className="empty-box">
            No Medical History Found
          </div>

        )}

      </div>

    </div>
  );
}