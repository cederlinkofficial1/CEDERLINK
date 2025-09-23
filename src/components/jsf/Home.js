import React from "react";
import Qoute from "./Qoute";

const Home = () => {
    return(
        <>
            {/* First page - full viewport height */}
            {/* <div className="home-content"> */}
                {/* First page content */}
            {/* </div> */}
            
            {/* Quote section - connected directly to first page */}
            <Qoute />
            
            {/* Second page content */}
            <div className="second-page">
                <h2>Second page content</h2>
                <p>This is where additional content for the second page would go.</p>
            </div>
        </>
    );
};

export default Home;