import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const ProtectedProfile = ({ children }) => {
  const userToken = localStorage.getItem("userToken");
  const { token } = useSelector((state) => state.user);

  if (!userToken && !token) {
    return <Navigate to="/" replace />;
  }

  return children;
};
export default ProtectedProfile;
