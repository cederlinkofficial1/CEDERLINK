import React from "react";
import { useOutletContext } from "react-router-dom";
import "./ShadowImage.css";

const ShadowImage = () => {
    const [isDarkTheme] = useOutletContext();
    
    return (
        <div className="shadow-image-container">
            <img 
                src={isDarkTheme
                    ? "https://raw.githubusercontent.com/cederlinkofficial1/CEDERLINK/main/src/components/images/shadow_svg_Darktheme.svg"
                    : "https://raw.githubusercontent.com/cederlinkofficial1/CEDERLINK/main/src/components/images/shadow_svg_lightheme.svg"
                }
                    alt="shadow" 
                className="shadow-img" 
            />
        </div>
    );
};

export default ShadowImage;