import React from "react";
import "./HeroSection.css";

const HeroSection = ({ isDarkTheme }) => {
  const heroStyle = {
    backgroundImage: isDarkTheme 
      ? `url('https://raw.githubusercontent.com/cederlinkofficial1/CEDERLINK/main/src/components/images/okokdarkTheme.jpg')`
      : `url('https://raw.githubusercontent.com/cederlinkofficial1/CEDERLINK/main/src/components/images/okok.jpg')`
  };

  return (

    <div className="hero-section"style={heroStyle}>   
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