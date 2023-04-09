import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const Protected = ({ children }) => {
  const userToken = localStorage.getItem("userToken");
  const { token } = useSelector((state) => state.user);

  if (token && userToken) {
    return <Navigate to="/" replace />;
  }

  return children;
};
export default Protected;
