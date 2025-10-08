import React from "react";
import { useOutletContext } from "react-router-dom";
import "./About.css";

const About = () => {
    const [isDarkTheme] = useOutletContext();
    return(
        <div className="about">
            {/* Background image */}
            <img 
                src={isDarkTheme
                    ? "https://raw.githubusercontent.com/cederlinkofficial1/CEDERLINK/main/src/components/images/AboutUsBkgDarkTheme.svg"
                    : "https://raw.githubusercontent.com/cederlinkofficial1/CEDERLINK/main/src/components/images/AboutUsBkg.svg"
                }
                alt="About Us Background"
                className="about-background"
            />
            
            {/* FirstRectangle image on top */}
            <img 
                src="https://raw.githubusercontent.com/cederlinkofficial1/CEDERLINK/main/src/components/images/FirstRectangle.svg"
                alt="First Rectangle"
                className="first-rectangle"
            />
            
            {/* SecondRectangle image to the right of the first rectangle */}
            <img 
                src="https://raw.githubusercontent.com/cederlinkofficial1/CEDERLINK/main/src/components/images/SecondRectangle.svg"
                alt="Second Rectangle"
                className="second-rectangle"
            />
            
            {/* Straight line with theme-dependent color */}
            <div className={`about-line ${isDarkTheme ? 'dark' : 'light'}`}></div>
            
            {/* About Us text with arrow */}
            <div className="about-us-title">
                <span className={`about-us-text ${isDarkTheme ? 'dark' : 'light'}`}>ABOUT US</span>
                <img 
                    src={isDarkTheme
                        ? "https://raw.githubusercontent.com/cederlinkofficial1/CEDERLINK/main/src/components/images/Arrow_NewsroomButton_DarTheme.png"
                        : "https://raw.githubusercontent.com/cederlinkofficial1/CEDERLINK/main/src/components/images/Arrow_NewsroomButton_LightTheme.png"
                    }
                    alt="Arrow"
                    className="about-us-arrow"
                />
            </div>

            
        </div>
    );
};

export default About;