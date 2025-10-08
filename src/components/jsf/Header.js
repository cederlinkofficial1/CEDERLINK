import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = ({ isDarkTheme, toggleTheme }) => {
    const location = useLocation();
    
    return (
        <header>
            {/* Logo that changes with theme */}
            <div className="logo">
                <img 
                    src={isDarkTheme 
                        ? "https://raw.githubusercontent.com/cederlinkofficial1/CEDERLINK/main/src/components/images/logo_bannerDarkTheme.svg"
                        : "https://raw.githubusercontent.com/cederlinkofficial1/CEDERLINK/main/src/components/images/logo_banner_lightTheme.svg"
                    }
                    alt="CederLink Logo"
                />
            </div>
            
            <nav>
                <div className="nav-items">
                    <Link to="/" className={`nav-item ${location.pathname === "/" ? "active" : ""}`}>Home</Link>
                    <Link to="/newsroom" className={`nav-item ${location.pathname === "/newsroom" ? "active" : ""}`}>Newsroom</Link>
                    <Link to="/projects" className={`nav-item ${location.pathname === "/projects" ? "active" : ""}`}>Projects</Link>
                    <Link to="/about" className={`nav-item ${location.pathname === "/about" ? "active" : ""}`}>About Us</Link>
                    <Link to="/contact" className={`nav-item contact ${location.pathname === "/contact" ? "active" : ""}`}>Contact</Link>
                </div>
            </nav>
            
            <button 
                className="theme-toggle"
                onClick={toggleTheme}
            >
                {isDarkTheme ? (
                    <img 
                        src="https://raw.githubusercontent.com/cederlinkofficial1/CEDERLINK/main/src/components/images/lightThemeButton.svg"
                        alt="Light Mode"
                        className="theme-toggle-icon-light"
                    />
                ) : (
                    <img 
                        src="https://raw.githubusercontent.com/cederlinkofficial1/CEDERLINK/main/src/components/images/darkThemeButton.svg"
                        alt="Dark Mode"
                        className="theme-toggle-icon-dark"
                    />
                )}
            </button>
        </header>
    );
};

export default Header;