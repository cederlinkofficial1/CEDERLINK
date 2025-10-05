import React from "react";
import { useOutletContext } from "react-router-dom";
import ZeroImage from "./ZeroImage";
import ShadowImage from "./ShadowImage";
import LampImage from "./LampImage";
import Lamp1Image from "./LampImage1";
import LampLightDarkTheme from "./LampLightDarkTheme"; // Import the new component

const Projects = () => {
    const [isDarkTheme] = useOutletContext();
    
    return(
        <div className={`projects ${isDarkTheme ? 'dark-theme' : ''}`} style={{position: 'relative'}}>
            <ShadowImage />
            
            {/* Conditionally render either light or dark theme lamp */}
            {isDarkTheme ? <Lamp1Image /> : <LampImage />}
            
            {/* Only show lamp light in dark theme */}
            {isDarkTheme && <LampLightDarkTheme />}
            
            {/* Add texture at the top */}
            <div className="projects-texture"></div>
            
            {/* Center the tagline */}
            <div className="projects-content">
                <h1 className="vision-tagline">
                    Scaling up "THE ZERO" <br/>
                    to a bigger number
                </h1>
            </div>
            
            {/* Add the Zero component */}
            <ZeroImage />
            
            {/* Bottom line */}
            <div className="projects-bottom-line"></div>
            
            {/* "WE BELIEVE" text and arrow below the line */}
            <div className="projects-footer">
                <h2 className="projects-believe-title">
                    WE BELIEVE
                    <img 
                        src={isDarkTheme 
                            ? "https://raw.githubusercontent.com/cederlinkofficial1/CEDERLINK/main/src/components/images/Arrow_NewsroomButton_DarTheme.png"
                            : "https://raw.githubusercontent.com/cederlinkofficial1/CEDERLINK/main/src/components/images/Arrow_NewsroomButton_LightTheme.png"
                        }
                        alt="Arrow"
                        className="projects-arrow"
                    />
                </h2>
            </div>
        </div>
    );
};

export default Projects;