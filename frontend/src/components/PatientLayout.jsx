import PatientSidebar from "./PatientSidebar";
import "../styles/PatientLayout.css";

export default function PatientLayout({
  title,
  children
}) {

  return (

    <div className="page-container">

      <PatientSidebar />

      <div className="main-content">

        <div className="topbar">
          <h1>{title}</h1>
        </div>

        {children}

      </div>

    </div>
  );
}