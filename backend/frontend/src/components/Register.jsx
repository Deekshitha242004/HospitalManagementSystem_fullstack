import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "PATIENT"
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    // Clear only that field error
    setErrors({
      ...errors,
      [e.target.name]: ""
    });
  };

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrors({});
    setSuccess("");

    // ✅ Frontend validation
    if (!formData.name || !formData.email || !formData.password) {
      setErrors({
        name: !formData.name ? "Name is required" : "",
        email: !formData.email ? "Email is required" : "",
        password: !formData.password ? "Password is required" : ""
      });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        if (data.error) {
          // General error (like duplicate email)
          setErrors({ general: data.error });
        } else {
          // Field errors from backend
          setErrors(data);
        }
      } else {
        // ✅ Success
        setSuccess("Registration Successful ✅");

        setFormData({
          name: "",
          email: "",
          password: "",
          role: "PATIENT"
        });

        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }

    } catch (error) {
      setErrors({ general: "Server error, please try again" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">

        <h2>Registration</h2>

        <form onSubmit={handleSubmit}>

          {/* NAME */}
          <div className="field">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>

          {/* EMAIL */}
          <div className="field">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          {/* PASSWORD */}
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>

          {/* ROLE */}
          <div className="field">
            <label>Select Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="PATIENT">Patient</option>
              <option value="DOCTOR">Doctor</option>
              <option value="ADMIN">Admin</option>
              <option value="STAFF">Staff</option>
            </select>
          </div>

          {/* GENERAL ERROR */}
          {errors.general && <p className="error">{errors.general}</p>}

          {/* SUCCESS */}
          {success && <p className="success">{success}</p>}

          <button type="submit" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>

        </form>

      </div>
    </div>
  );
}

export default Register;