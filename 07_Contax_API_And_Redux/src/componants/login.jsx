import React, { useContext, useState } from "react";
import contexProvider from "../contex/contexProvider";
import Context from "../contex/contex";

function Login() {
  let [userName, setUserName] = useState("");
  let [password, setPassword] = useState("");
  const {setUser} = useContext(Context)

  function login_form(e){
    e.preventDefault();
    console.log("this is called ",password , userName);
    setUser({userName, password})
  }
  function setPassword_method(e){
    setPassword(e.target.value)
  }
  function setUserName_method(e){
    setUserName(e.target.value)
  }

  return (
    <>
      <h1>Log in form</h1>

      <input type="text" value={userName} onChange={setUserName_method} placeholder="Username" />
      <input type="password" value={password} onChange={setPassword_method} placeholder="Password" />
      <button type="submit" onClick={login_form}>Log In</button>
    </>
  );
}
export default Login;
