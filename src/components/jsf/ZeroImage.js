import React from "react";
import { useOutletContext } from "react-router-dom";
import "./ZeroImage.css";

const ZeroImage = () => {
    const [isDarkTheme] = useOutletContext();
    
    return (
        <div className="zero-image-container">
            <img 
                src={isDarkTheme 
                    ? "https://raw.githubusercontent.com/cederlinkofficial1/CEDERLINK/main/src/components/images/0_SVGDarkTheme.svg"
                    : "https://raw.githubusercontent.com/cederlinkofficial1/CEDERLINK/main/src/components/images/0_SVGLightTheme.svg"
                }
                alt="Zero" 
                className="zero-img" 
            />
        </div>
    );
};

export default ZeroImage;