import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, allowedRoles }) {
  const role = localStorage.getItem("role");

  // ❌ Not logged in
  if (!role) {
    return <Navigate to="/login" />;
  }

  // ❌ Role not allowed
  if (!allowedRoles.includes(role)) {
    return <Navigate to="/login" />;
  }

  // ✅ Access allowed
  return children;
}

export default ProtectedRoute;