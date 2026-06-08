import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-light text-dark">

      {/* 🔷 Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-info shadow-sm py-3">
        <div className="container">
          <span className="navbar-brand fw-bold fs-3 text-white">CareConnect</span>

          <div className="collapse navbar-collapse" id="menu">
            <ul className="navbar-nav ms-auto align-items-center">

              <li className="nav-item mx-2">
                <span className="nav-link text-white">Home</span>
              </li>

              <li className="nav-item mx-2">
                <span className="nav-link text-white">Services</span>
              </li>

              <li className="nav-item mx-2">
  <Link to="/doctors" className="nav-link text-white">
    Doctors
  </Link>
</li>

              <li className="nav-item ms-3">
                <button
                  className="btn btn-light btn-sm px-3 py-1 fw-semibold"
                  onClick={() => navigate("/register")}
                >
                  Register
                </button>
              </li>

              <li className="nav-item ms-2">
                <button
                  className="btn btn-light btn-sm px-3 py-1 fw-semibold"
                  onClick={() => navigate("/login")}
                >
                  Login
                </button>
              </li>

            </ul>
          </div>
        </div>
      </nav>


     {/* 🔷 Hero Section */}
      {/* 🔷 PREMIUM HERO SECTION */}
{/* 🔷 PREMIUM HERO SECTION */}
<section
  className="d-flex align-items-center"
  style={{
    minHeight: "90vh",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1580281657527-47e59b6d6a58')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative"
  }}
>
  {/* Gradient Overlay */}
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background:
        "linear-gradient(to right, rgba(0,0,0,0.85), rgba(0,0,0,0.3))"
    }}
  ></div>

  <div className="container position-relative text-white">
    <div className="row align-items-center">

      {/* 🔹 LEFT CONTENT */}
      <div className="col-lg-6">

        <h1 className="fw-bold" style={{ fontSize: "3rem" }}>
          Smart Healthcare <br />
          <span className="text-info">Made Simple</span>
        </h1>

        <p className="mt-3" style={{ fontSize: "1.1rem", maxWidth: "500px" }}>
          Book appointments, consult top doctors, and manage your
          health records — all in one secure platform.
        </p>

        {/* Buttons (same size as navbar) */}
        <div className="mt-4 d-flex gap-3">

          <button
            className="btn btn-light btn-sm px-3 py-1 fw-semibold"
            onClick={() => navigate("/appointment")}
          >
            Book Appointment
          </button>

          <button className="btn btn-outline-light btn-sm px-3 py-1 fw-semibold">
            Learn More
          </button>

        </div>

      </div>

      {/* 🔹 RIGHT SIDE - PREMIUM DOCTOR IMAGE */}
      <div className="col-lg-6 d-none d-lg-flex justify-content-center align-items-center">

        <div style={{ position: "relative" }}>

          {/* Glow Effect */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "300px",
              height: "300px",
              background: "rgba(13,110,253,0.3)",
              borderRadius: "50%",
              filter: "blur(80px)",
              zIndex: 0
            }}
          ></div>

          {/* Doctor PNG (no box look) */}
          <img
            src="https://pngimg.com/uploads/doctor/doctor_PNG16041.png"
            alt="Doctor"
            style={{
              width: "350px",
              position: "relative",
              zIndex: 1,
              filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.4))"
            }}
          />

        </div>

      </div>

    </div>
  </div>
</section>


      {/* 🔷 Services */}
      <section className="py-5 bg-light">
        <div className="container">

          <h2 className="text-center fw-bold mb-2 text-primary">
            Our Services
          </h2>

          <p className="text-center text-muted mb-5">
            We provide comprehensive healthcare solutions to ensure your well-being.
          </p>

          <div className="row g-4 justify-content-center">

            <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow-sm h-100 text-center p-4">
                <h5 className="fw-bold text-primary">🩺 General Consultation</h5>
                <p className="text-muted mt-2">
                  Consult experienced doctors for regular health checkups and advice.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow-sm h-100 text-center p-4">
                <h5 className="fw-bold text-primary">🚑 Emergency Care</h5>
                <p className="text-muted mt-2">
                  24/7 emergency services with quick response and care.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow-sm h-100 text-center p-4">
                <h5 className="fw-bold text-primary">👨‍⚕️ Specialist Doctors</h5>
                <p className="text-muted mt-2">
                  Access top specialists across multiple medical fields.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow-sm h-100 text-center p-4">
                <h5 className="fw-bold text-primary">💊 Pharmacy Services</h5>
                <p className="text-muted mt-2">
                  Order medicines easily with reliable delivery support.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow-sm h-100 text-center p-4">
                <h5 className="fw-bold text-primary">🧪 Lab Tests</h5>
                <p className="text-muted mt-2">
                  Book diagnostic tests and get accurate reports quickly.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 🔷 Testimonals */}
      <section className="py-5 bg-info bg-opacity-10">
        <div className="container">

          <h2 className="text-center fw-bold mb-2 text-primary">
            Testimonals
          </h2>

          <p className="text-center text-muted mb-5">
            Trusted by hundreds of patients for quality healthcare services.
          </p>

          <div className="row g-4">

            <div className="col-md-4">
              <div className="card border-0 shadow-sm p-4 h-100">
                <p className="text-muted">
                  "Booking appointments was quick and easy. Excellent service!"
                </p>
                <h6 className="fw-bold mt-3 text-primary">- Ramesh Kumar</h6>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card border-0 shadow-sm p-4 h-100">
                <p className="text-muted">
                  "Doctors are very professional and supportive."
                </p>
                <h6 className="fw-bold mt-3 text-primary">- Priya Sharma</h6>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card border-0 shadow-sm p-4 h-100">
                <p className="text-muted">
                  "Emergency services are fast and reliable."
                </p>
                <h6 className="fw-bold mt-3 text-primary">- Arjun Reddy</h6>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 🔷 Footer */}
      <footer className="bg-info text-white text-center p-4">
        <h5>CareConnect</h5>
        <p className="mb-0">
          © 2026 CareConnect | Hospital Management System
        </p>
      </footer>


      {/* 🔷 Hover Effect */}
      <style>{`
        .btn-light:hover {
          background-color: #0d6efd !important;
          color: white !important;
        }
      `}</style>

    </div>
  );
}

export default Home;