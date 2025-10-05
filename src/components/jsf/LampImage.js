import React from "react";
import { useOutletContext } from "react-router-dom";
import "./LampImage.css";

const LampImage = () => {
    const [isDarkTheme] = useOutletContext();
    
    return (
        <div className="lamp-image-container">
            <img 
                src="https://raw.githubusercontent.com/cederlinkofficial1/CEDERLINK/main/src/components/images/Lamp_SVG_LightTheme.svg"
                alt="lamp" 
                className="lamp-img" 
            />
        </div>
    );
};

export default LampImage;