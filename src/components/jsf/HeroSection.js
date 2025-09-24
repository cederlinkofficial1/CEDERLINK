import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-section">
      {/* Logo */}
      <div className="logo">
        <img 
          src="https://raw.githubusercontent.com/cederlinkofficial1/CEDERLINK/main/src/components/images/logo_banner.png" 
          alt="CederLink Logo"
        />
      </div>
      
      <div className="hero-content">
        <h1 className="hero-tagline">
          Enterprise built on 
          <br />
          <span className="alpine-highlight">Alpine</span> Strength
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;