import React from "react";
import "./Qoute1.css";
import MountainImage from "./MountainImage";
import { useOutletContext } from "react-router-dom";

const Qoute1 = () => {
    // Get the theme state from outlet context
    const [isDarkTheme] = useOutletContext();
    
    return(
        <div className={`quote1-container ${isDarkTheme ? 'dark-theme' : ''}`}>
            <div className="quote1-content">
                <div className="quote-text-section">
                    <h2 className="quote1-text">
                        The resolve of the summit is not debated
                        by the tempest, only witnessed by ages the
                        ages
                    </h2>
                </div>
                <MountainImage isDarkTheme={isDarkTheme} />
            </div>
        </div>
    );
};

export default Qoute1;