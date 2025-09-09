import React from "react";
import Beams from "./HeaderBkg";

const Body = () => (
  <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
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
    
    <div className="banner-container">
      {/* Main logo in center
      <div className="cederlink-logo">
        <img src="https://raw.githubusercontent.com/cederlinkofficial1/CEDERLINK/main/src/cederlink_logo.png" alt="CederLink Logo" />
      </div> */}
      
      {/* Header elements */}
      <div className="banner-header-logo">
        <img src="https://raw.githubusercontent.com/cederlinkofficial1/CEDERLINK/main/logo.png" alt="CederLink Logo" />
      </div>
      
      <div className="banner-header-title">
        CederLink
      </div>
      
      <div className="banner-nav">
        <ul>
          <li>Home</li>
          <li>Articles</li>
          <li>Blogs</li>
          <li>Contact Us</li>
          <li>About Us</li>
        </ul>
      </div>
    </div>
  </div>
 </div>
);

export default Body;