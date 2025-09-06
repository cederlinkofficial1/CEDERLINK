import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";

const About = () => (
  <div>
    <div className="banner-container">
      <img 
        src="https://raw.githubusercontent.com/cederlinkofficial1/CEDERLINK/main/banner.png" 
        alt="CederLink Banner" 
        className="responsive-banner"
      />
    </div>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<About />);