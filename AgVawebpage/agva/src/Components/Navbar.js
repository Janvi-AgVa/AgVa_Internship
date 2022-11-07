import React from 'react'
import LOGO from "/home/agva/Desktop/JanviGupta/AgVawebpage/agva/src/videos/agva-healthcare-removebg-preview.png";
function Navbar() {
  return (
    <div className='NavBar'>         
          <img src={LOGO} alt=""/>
           <ul>
                <li><a href='#home' class="Home" id="home">Home</a></li>
                <li><a href='#home'>About Us</a></li>
                <li><a href='#home'>Contact us</a></li>
                <li><a href='#home'>Press</a></li>
            </ul>
    
    </div>
  )
}

export default Navbar