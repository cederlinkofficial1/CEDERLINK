import React from "react";
import { useOutletContext } from "react-router-dom";
import "./LampLightDarkTheme.css";

const LampLightDarkTheme = () => {
    const [isDarkTheme] = useOutletContext();
    
    return (
        <div className="lamp-light-container">
            <img 
                src="https://raw.githubusercontent.com/cederlinkofficial1/CEDERLINK/main/src/components/images/LampLightDarkTheme.svg"
                alt="Lamp Light" 
                className="lamp-light-img" 
            />
        </div>
    );
};

export default LampLightDarkTheme;