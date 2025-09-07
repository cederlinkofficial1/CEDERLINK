import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";

const About = () => (
  <div>
    <div className="banner-container">
      <img 
        src="https://raw.githubusercontent.com/cederlinkofficial1/CEDERLINK/main/src/CederLink.webp" 
        alt="CederLink Banner" 
        className="responsive-banner"
      />
    </div>

    <div className="cederlink-logo">
      <img src = "https://raw.githubusercontent.com/cederlinkofficial1/CEDERLINK/main/src/cederlink_logo.png"></img>
    </div>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<About />);