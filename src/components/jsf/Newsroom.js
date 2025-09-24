import React from "react";
import "./Newsroom.css";
import { useOutletContext } from "react-router-dom";

const Newsroom = () => {
    // Get theme state from outlet context
    const [isDarkTheme] = useOutletContext();
    
    return(
        <div className={`newsroom ${isDarkTheme ? 'dark-theme' : ''}`}>
            <div className="newsroom-image">
                <img 
                    src={isDarkTheme 
                        ? "https://raw.githubusercontent.com/cederlinkofficial1/CEDERLINK/main/src/components/images/NewsroomUpperDarkTheme.jpg" 
                        : "https://raw.githubusercontent.com/cederlinkofficial1/CEDERLINK/main/src/components/images/NewsroomUpperBlueTheme.jpg"
                    } 
                    alt="Newsroom banner" 
                />
                <div className="image-sections">
                    <div className="section"></div>
                    <div className="section"></div>
                    <div className="section"></div>
                    <div className="section"></div>
                </div>
            </div>
            <div className="newsroom-content">
                {/* The horizontal line is added via CSS ::before */}
                
                {/* Text below the horizontal line */}
                <div className="newsroom-text-container">
                    <h2 className="newsroom-title">NEWSROOM</h2>
                </div>
            </div>
        </div>
    );
};

export default Newsroom;