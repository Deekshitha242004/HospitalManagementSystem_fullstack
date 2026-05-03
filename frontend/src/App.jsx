import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Appointment from "./components/Appointment";
import Register from "./components/Register";
import Login from "./components/Login";
import AdminDashboard from "./pages/AdminDashboard";
import DoctorDashboard from "./pages/DoctorDashboard";
import PatientDashboard from "./pages/PatientDashboard";
import StaffDashboard from "./pages/StaffDashboard";
import DoctorCards from "./components/Doctors";
import ProtectedRoute from "./components/ProtectedRoute"; // ✅ ADD

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={<Appointment />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
         <Route path="/doctors" element={<DoctorCards />} />

        {/* 🔐 PROTECTED ROUTES */}

        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute allowedRoles={["ADMIN"]}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/doctor-dashboard"
          element={
            <ProtectedRoute allowedRoles={["DOCTOR"]}>
              <DoctorDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/staff-dashboard"
          element={
            <ProtectedRoute allowedRoles={["STAFF"]}>
              <StaffDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/patient-dashboard"
          element={
            <ProtectedRoute allowedRoles={["PATIENT"]}>
              <PatientDashboard />
            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./components/Home";
// import Appointment from "./components/Appointment";
// import Register from "./components/Register";   // ✅ ADD
// import Login from "./components/Login";         // ✅ ADD

// function App() {
//   return (
//     <BrowserRouter>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/appointment" element={<Appointment />} />

//         {/* ✅ ADD THESE */}
//         <Route path="/register" element={<Register />} />
//         <Route path="/login" element={<Login />} />
//            {/* ✅ DASHBOARD ROUTES */}
//           <Route path="/admin-dashboard" element={<AdminDashboard />} />
//         <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
//         <Route path="/patient-dashboard" element={<PatientDashboard />} />
//         <Route path="/staff-dashboard" element={<StaffDashboard />} />


//       </Routes>

//     </BrowserRouter>
//   );
// }

// export default App;