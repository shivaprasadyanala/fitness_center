import React from 'react'
import './navbar.css';

const Navbar = () => {
 return (
  <div className="navbar">
   <a href="/login" className="navbar-item">Login</a>
   <a href="/signup" className="navbar-item">Sign Up</a>
  </div>
 );
}

export default Navbar