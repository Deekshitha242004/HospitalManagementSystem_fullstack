import React, { useEffect, useState } from "react";
import axios from "axios";


function DoctorCards() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/doctor") // change to your API
      .then((res) => {
        setDoctors(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="doctor-container">
      {doctors.map((doc) => (
        <div className="doctor-card" key={doc.id}>
          
          <img 
            src={doc.image || "https://via.placeholder.com/150"} 
            alt="doctor" 
            className="doctor-img"
          />

          <div className="doctor-info">
            <h3>Dr. {doc.name}</h3>
            <p className="experience">{doc.experience} years experience</p>
          </div>

        </div>
      ))}
    </div>
  );
}

export default DoctorCards;