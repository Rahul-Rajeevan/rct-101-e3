import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const RequiredAuth = ({ children }) => {
  const token = useContext(AuthContext)
  const {pathname}=useLocation();
  if(token==="QpwL5tke4Pnpja7X4")
  return children;
  else
  return <Navigate to={"/login"} state={{pathname}} replace/>
};

export default RequiredAuth;
