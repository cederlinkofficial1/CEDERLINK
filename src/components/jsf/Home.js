import React from "react";
import { useOutletContext } from "react-router-dom";
import Qoute1 from "./Qoute1";
import HeroSection from "./HeroSection";
import About from "./About";
import Newsroom from "./Newsroom";
import Projects from "./Projects";


const Home = () => {
    const [isDarkTheme, toggleTheme] = useOutletContext();
    
    return(
        <>
            {/* Hero section (first page) */}
            <section id="home">
                <HeroSection isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
            </section>
            
            {/* First quote section */}
            <Qoute1 />
            
            {/* About Us section */}
            <section className="home-about-section">
                <Newsroom />
            </section>

            {/* Newsroom section */}
            <section className="home-projects-section">
                <Projects />
            </section>
            
            {/* Third quote section */}
            <section className="home-about-section">
                <About />
            </section>
        </>
    );
};

export default Home;