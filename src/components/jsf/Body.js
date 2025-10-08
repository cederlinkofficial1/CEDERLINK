import React from "react";
import Header from "./Header";
import "./Body.css";

const Body = ({ isDarkTheme, toggleTheme }) => {
    return (
        <div className={`body-container ${isDarkTheme ? 'dark-theme' : ''}`}>
            <Header isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
            <button 
                className="theme-toggle"
                onClick={toggleTheme}
            >
                {isDarkTheme ? (
                    <img 
                        src="https://raw.githubusercontent.com/cederlinkofficial1/CEDERLINK/main/src/components/images/lightthemeButton.png"
                        alt="Light Mode"
                        className="theme-toggle-icon-light"
                    />
                ) : (
                    <img 
                        src="https://raw.githubusercontent.com/cederlinkofficial1/CEDERLINK/main/src/components/images/darkthemeButton.png"
                        alt="Dark Mode"
                        className="theme-toggle-icon-dark"
                    />
                )}
            </button>
        </div>
    );
};

export default Body;