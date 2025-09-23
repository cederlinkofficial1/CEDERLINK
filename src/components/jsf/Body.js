import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

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
        <>
            <div className={`background-container ${isDarkTheme ? 'dark-theme' : 'light-theme'} ${isScrolled ? 'background-scrolled' : ''}`}>
                <Link to="/">
                    <img 
                        className="logo-banner"
                        src="https://raw.githubusercontent.com/cederlinkofficial1/CEDERLINK/main/src/components/images/logo_banner.png"
                        alt="CederLink Logo"
                    />
                </Link>
            </div>
            
            <nav className="nav-items">
                <ul>
                    <li><Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link></li>
                    <li><Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About Us</Link></li>
                    <li><Link to="/newsroom" className={location.pathname === "/newsroom" ? "active" : ""}>Newsroom</Link></li>
                    <li><Link to="/projects" className={location.pathname === "/projects" ? "active" : ""}>Projects</Link></li>
                    <li><Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact</Link></li>
                </ul>
            </nav>
            
            <button 
                className={`theme-toggle ${isDarkTheme ? 'dark' : 'light'}`}
                onClick={toggleTheme}
            >
                {isDarkTheme ? '☀️' : '🌙'}
            </button>
        </>
    );
};

export default Body;