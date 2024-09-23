import React, { useState } from 'react';
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className="header">
    <div className="logo-section">
      <img className="logo" src={Logo} alt="Logo" />
    </div>
    <div className="search-section">
      <input type="text" className="search-input" placeholder="Search..." />
      <button className="search-button"><FontAwesomeIcon icon={faSearch} /></button>
    </div>
    <div className="auth-links">
      <a href="/signup">SignUp</a>
      <a href="/login">Login</a>
    </div>
  </div>
  
  )
}

export default Navbar
