import React, { useState } from 'react';
import './Navbar.css'; // Make sure your CSS file is correctly imported

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Toggle function for mobile menu
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <a href="/">Black Bucks</a>
        </div>

        {/* Menu Links */}
        <div className={`menu-links ${isMenuOpen ? "active" : ""}`}>
          <ul>
            <li><a href="#home" onClick={toggleMenu}>Home</a></li>
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#services" onClick={toggleMenu}>Services</a></li>
            <li><a href="#blog" onClick={toggleMenu}>Blog</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact Us</a></li>
          </ul>
        </div>

        {/* Mobile Menu Icon (Hamburger) */}
        <div className="menu-icon" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;