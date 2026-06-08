import { useEffect, useState } from "react";
import axios from "axios";

import PatientSidebar from "../components/Sidebar";

import "../styles/PatientLayout.css";

export default function PatientReports() {

  const [reports, setReports] = useState([]);

  const patientId = 1;

  useEffect(() => {

    fetchReports();

  }, []);

  const fetchReports = async () => {

    try {

      const response = await axios.get(
        `http://localhost:8080/patient-report/${patientId}`
      );

      setReports(response.data);

    } catch (error) {

      console.log(error);
    }
  };

  return (

    <div className="page-container">

      <PatientSidebar />

      <div className="main-content">

        <div className="topbar">
          <h1>Reports</h1>
        </div>

        {reports.length > 0 ? (

          reports.map((report) => (

            <div
              className="info-card"
              key={report.id}
            >

              <h2 className="card-title">
                Report Details
              </h2>

              <div className="info-row">
                <div className="info-key">
                  Report Name
                </div>

                <div className="info-value">
                  {report.reportName}
                </div>
              </div>

              <div className="info-row">
                <div className="info-key">
                  Result
                </div>

                <div className="info-value">
                  {report.result}
                </div>
              </div>

            </div>

          ))

        ) : (

          <div className="empty-box">
            No Reports Found
          </div>

        )}

      </div>

    </div>
  );
}