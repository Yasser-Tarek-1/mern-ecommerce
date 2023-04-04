import React from "react";
import { Navigate } from "react-router-dom";
const ProtectedProfile = ({ children }) => {
  const userToken = localStorage.getItem("userToken");

  if (!userToken) {
    return <Navigate to="/" replace />;
  }

  return children;
};
export default ProtectedProfile;
