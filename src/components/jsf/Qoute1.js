import React, { useState } from "react";
import "./Qoute1.css";

const Qoute1 = () => {
    const [imageError, setImageError] = useState(false);
    
    return(
        <div className="quote1-container">
            <div className="quote1-content">
                <h2 className="quote1-text">
                    The resolve of the summit is not debated by the tempest, only witnessed by the ages
                </h2>
                <div className="mountain-image">
                    <img
                        src="https://raw.githubusercontent.com/cederlinkofficial1/CEDERLINK/main/src/components/images/BlueFractalMount.png" 
                        alt="Blue mountain fractal" 
                        onError={() => setImageError(true)}
                    />
                </div>
            </div>
        </div>
    );
};

export default Qoute1;