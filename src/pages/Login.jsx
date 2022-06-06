import axios from "axios";
import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const {settoken} = useContext(AuthContext)
  const [email, setemail] = useState()
  const [password, setpassword] = useState()
  
  const handle1=(e)=>{
    setemail(e.target.value)
  }
  const handle2=(e)=>{
    setpassword(e.target.value)
  }
  const handleOnclick=async()=>{
    let r=await axios.post("https://reqres.in/api/login",{"email":email,"password":password});
    settoken(r.data.token)

  }
  return (
    <div>
      <input data-cy="login-email" type="email" placeholder="Enter email" onChange={handle1}/>
      <input data-cy="login-password" type="password" placeholder="Enter password" onChange={handle2}/>
      <button data-cy="login-submit" onClick={handleOnclick}>Login</button>
    </div>
  );
};

export default Login;
