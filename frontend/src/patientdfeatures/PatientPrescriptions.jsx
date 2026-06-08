import { useEffect, useState } from "react";
import axios from "axios";
import PatientSidebar from "../components/Sidebar";;

import "../styles/PatientLayout.css";

export default function PatientPrescriptions() {

  const [prescriptions, setPrescriptions] = useState([]);

  const patientId = 1;

  useEffect(() => {

    fetchPrescriptions();

  }, []);

  const fetchPrescriptions = async () => {

    try {

      const response = await axios.get(
        `http://localhost:8080/patient-prescription/${patientId}`
      );

      setPrescriptions(response.data);

    } catch (error) {

      console.log(error);
    }
  };

  return (

    <div className="page-container">

      <PatientSidebar />

      <div className="main-content">

        <div className="topbar">
          <h1>Prescriptions</h1>
        </div>

        {prescriptions.length > 0 ? (

          prescriptions.map((prescription) => (

            <div
              className="info-card"
              key={prescription.id}
            >

              <h2 className="card-title">
                Prescription Details
              </h2>

              <div className="info-row">
                <div className="info-key">
                  Medicine
                </div>

                <div className="info-value">
                  {prescription.medicine}
                </div>
              </div>

              <div className="info-row">
                <div className="info-key">
                  Dosage
                </div>

                <div className="info-value">
                  {prescription.dosage}
                </div>
              </div>

              <div className="info-row">
                <div className="info-key">
                  Instructions
                </div>

                <div className="info-value">
                  {prescription.instructions}
                </div>
              </div>

            </div>

          ))

        ) : (

          <div className="empty-box">
            No Prescriptions Found
          </div>

        )}

      </div>

    </div>
  );
}