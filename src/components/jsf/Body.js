import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Body.css";

const Body = () => {
    const location = useLocation();
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    
    // Toggle theme function
    const toggleTheme = () => {
        const newTheme = !isDarkTheme;
        setIsDarkTheme(newTheme);
        
        if (newTheme) {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
    };
    
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
                className={`theme-toggle ${isDarkTheme ? 'dark' : 'light'}`}
                onClick={toggleTheme}
            >
                {isDarkTheme ? '☀️' : '🌙'}
            </button>
        </header>
    );
};

export default Body;