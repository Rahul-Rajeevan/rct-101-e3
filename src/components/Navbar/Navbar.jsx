import React from "react";
import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

// use react-router Link or NavLink
// const Link = <a />;

const Navbar = () => {
const {token,settoken} = useContext(AuthContext)
const navigate=Navigate();
const handleOnclick=()=>{
  if(token==="QpwL5tke4Pnpja7X4")
  {navigate("/")
    settoken(0);
  }
  else
  navigate("/login")
}
  return (
    <div data-cy="navbar">
      <Link data-cy="navbar-home-link"></Link>
      <span data-cy="navbar-cart-items-count">{/* count here */}</span>
      <button data-cy="navbar-login-logout-button" onClick={handleOnclick}>{token==="QpwL5tke4Pnpja7X4"?"Logout":"Login"}</button>
    </div>
  );
};

export default Navbar;
