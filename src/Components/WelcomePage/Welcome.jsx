import React from 'react'
import Navbar from './Navbar'; // Import Navbar component
import backgroundImage from './welcomebg.jpg'; // Import background image
import './welcome.css'
const Welcome = () => {
 return (
  <div className="welcome-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
   <div className="content">
    <div className="navbar-container">
     <Navbar className="navbar" />
    </div>
    <div className="welcome-text">
     <h1>Welcome to Fitness Hub</h1>
     <p>Your ultimate partner to find your dream fitness center</p>
     <a href="/signup"><button className="cta-button" >Get Started</button></a>
    </div>
   </div>
  </div>

 )
}

export default Welcome