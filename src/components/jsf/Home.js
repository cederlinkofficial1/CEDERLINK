import React from "react";
import Qoute1 from "./Qoute1";
import Qoute2 from "./Qoute2";
import Qoute3 from "./Qoute3";
import HeroSection from "./HeroSection";
import About from "./About";
import Newsroom from "./Newsroom";
import Projects from "./Projects";


const Home = () => {
    return(
        <>
            {/* Hero section (first page) */}
            <HeroSection />
            
            {/* First quote section */}
            <Qoute1 />
            
            {/* About Us section */}
            <section className="home-about-section">
                <Newsroom />
            </section>

            {/* Second quote section */}            
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