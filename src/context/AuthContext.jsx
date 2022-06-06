import React, { createContext } from "react";
import { useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // const [Auth, setAuth] = useState(false)
  const [token, settoken] = useState(0)
  return <AuthContext.Provider value={{token,settoken}}>{children}</AuthContext.Provider>;
};
