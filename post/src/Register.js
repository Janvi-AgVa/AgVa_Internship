import React from 'react';
import {useState} from 'react';
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");


  function saveData(){
    let data={name,email,password}
    fetch("http://logger-server.herokuapp.com/api/logger/auth/register",{
      method: "POST",
      headers:{
        'Accept':'application.json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(data)
    }).then(response => response.json())
    .then(data => {
      console.log(data)
      if(data.status) {
        alert("Signed up successfully.");
        navigate('/');
        
      } else {
        alert(data.data.err.msg);
        navigate('/register')
      }
    });
  }

  return (
    <div className='main-container'>
        <h1>REGISTER PAGE</h1>
        <input type="text" name="name" placeholder='Name' value={name} onChange={(e)=>(setName(e.target.value))}/> <br/><br/>
        <input type="email" name="email" placeholder='Email Id' value={email} onChange={(e)=>(setEmail(e.target.value))}/> <br/><br/>
        <input type="password" name="password" placeholder='Password' value={password} onChange={(e)=>(setPassword(e.target.value))}/> <br/><br/>
        <button type="button" onClick={saveData}>Register Yourself</button><br/><br/>
        
    </div>
  );
}

export default Register;