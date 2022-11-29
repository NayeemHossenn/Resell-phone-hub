import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import UseAdmin from "../../hooks/UseAdmin";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  const [isAdmin, adminLoading] = UseAdmin(user?.email);
  if (loading || adminLoading) {
    return (
      <div className="flex justify-center items-center">
        <div
          className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full bg-red-500"
          role="status"
        >
          <span className="visually-hidden">...</span>
        </div>
      </div>
    );
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
