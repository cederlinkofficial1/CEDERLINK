import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Body.css";

const Body = ({ isDarkTheme, toggleTheme }) => {
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    
    // Handle scroll to slide background
    useEffect(() => {
        const handleScroll = () => {
            // When scrolled past ~60% of viewport height to start transition earlier
            if (window.scrollY > window.innerHeight * 0.6) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    return(
        <header>
            {/* Logo that changes with theme */}
            <div className="logo">
                <img 
                    src={isDarkTheme 
                        ? "https://raw.githubusercontent.com/cederlinkofficial1/CEDERLINK/main/src/components/images/logo_banner_darktheme.png"
                        : "https://raw.githubusercontent.com/cederlinkofficial1/CEDERLINK/main/src/components/images/logo_banner.png"
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
        </header>
    );
};

export default Body;