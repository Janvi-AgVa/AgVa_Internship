import React from 'react';
import "./App.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';
function Login() {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const cookies = new Cookies();
 
  
  function saveData() {
    let data = { email, password };
    fetch("http://logger-server.herokuapp.com/api/logger/auth/login", {
      method: "POST",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.status) {
          
          cookies.set('Token', data.data.token);
        
        
               navigate('/home');
     
         }
         else {
          
          alert(data.data.err.msg);
          navigate('/')
        }
      });
  }
 

  

 
  return (
    <div className="App">
      <h1>LOGIN PAGE</h1>
      <input
        type="email"
        name="email"
        placeholder="Email Id"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />{" "}
      <br />
      <br />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />{" "}
      <br />
      <br />
      <button type="button" onClick={saveData} >
        Login 
      </button>
      <br />
      <br />
      <button>
        <Link to="/register">Register</Link>
      </button>
    </div>
  );
}
export default Login;
