import React from "react";
import { useOutletContext } from "react-router-dom";
import "./LampImage1.css";

const Lamp1Image = () => {
    const [isDarkTheme] = useOutletContext();
    
    return (
        <div className="lamp1-image-container">
            <img 
                src="https://raw.githubusercontent.com/cederlinkofficial1/CEDERLINK/main/src/components/images/Lamp_SVG_DarkTheme.svg"
                alt="lamp1" 
                className="lamp1-img" 
            />
        </div>
    );
};

export default Lamp1Image;