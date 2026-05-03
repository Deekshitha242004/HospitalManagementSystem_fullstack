import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });

    setError(""); // clear error while typing
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        loginData
      );
      // ✅ Extract message & role from backend
      const message = response.data.message;
      const role = response.data.role;


      // ✅ backend returns string
      setSuccess(message);   // "Login Successful"
      // ✅ Store role (optional)
      localStorage.setItem("role", role);
       // ✅ Redirect based on role
      setTimeout(() => {
        if (role === "ADMIN") {
          navigate("/admin-dashboard");
        } else if (role === "DOCTOR") {
          navigate("/doctor-dashboard");
        }
           else if (role === "STAFF") {
    navigate("/staff-dashboard"); 
           }
         else {
          navigate("/patient-dashboard");
        }
      }, 1000);
      
    } catch (err) {
      // ✅ show proper error message
      if (err.response && err.response.data?.error) {
        setError(err.response.data.error);
      } else {
        setError("Login Failed. Please try again.");
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">

        <h2>Login</h2>

        <form onSubmit={handleSubmit}>

          {/* EMAIL */}
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={loginData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* PASSWORD */}
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={loginData.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* ERROR */}
          {error && <p className="error">{error}</p>}

          {/* SUCCESS */}
          {success && <p className="success">{success}</p>}

          <button type="submit">Login</button>

        </form>

      </div>
    </div>
  );
}

export default Login;