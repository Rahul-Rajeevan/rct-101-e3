import React, { createContext }from "react";
import { useState } from "react";

export const CartContext = createContext();


export const CartProvider = ({ children }) => {
  const [list, setlist] = useState([])

  return <CartContext.Provider value={{list,setlist}}>{children}</CartContext.Provider>;
};
