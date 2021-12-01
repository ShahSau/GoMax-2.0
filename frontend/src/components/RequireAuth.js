import React from "react";
import { Outlet, Navigate } from "react-router-dom";
function RequireAuth(props) {
  console.log(localStorage.getItem("gomax-user"));
  if (!localStorage.getItem("gomax-user")) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
}

export default RequireAuth;
