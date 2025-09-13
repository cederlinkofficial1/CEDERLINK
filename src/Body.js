import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Beams from "./HeaderBkg";

const Body = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Update document body when menu state changes
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      {/* Full-screen overlay for when menu is open */}
      <div 
        className={`fullscreen-overlay ${isMenuOpen ? 'active' : ''}`} 
        onClick={toggleMenu}
      ></div>
      
      {/* Beams background */}
      <div className="beams-container">
        <Beams 
          beamWidth={2.5}
          beamHeight={18}
          beamNumber={14}
          lightColor="#ffffff"
          speed={1.8}
          noiseIntensity={1.5}
          scale={0.25}
          rotation={35}
        />
      </div>
      
      <div className="banner-container">
        {/* Header elements */}
        <div className="banner-header-logo">
          <img src="https://raw.githubusercontent.com/cederlinkofficial1/CEDERLINK/main/logo.png" alt="CederLink Logo" />
        </div>
        
        <div className="banner-header-title">
          CederLink
        </div>
        
        {/* Regular navigation for tablets and larger screens */}
        <div className="banner-nav desktop-nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/articles">Articles</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </div>
        
        {/* Hamburger menu for mobile */}
        {/* Mobile menu slide-in panel */}
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/articles" onClick={toggleMenu}>Articles</Link></li>
            <li><Link to="/blogs" onClick={toggleMenu}>Blogs</Link></li>
            <li><Link to="/contact" onClick={toggleMenu}>Contact Us</Link></li>
            <li><Link to="/about" onClick={toggleMenu}>About Us</Link></li>
          </ul>
        </div>
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`}>
            <span></span> 
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;