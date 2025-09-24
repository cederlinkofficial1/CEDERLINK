import React, { useState } from "react";
import "./MountainImage.css";

const MountainImage = ({ isDarkTheme }) => {
  const [imageError, setImageError] = useState(false);
  
  return (
    <div className="mountain-image-container">
      {imageError ? (
        <div className="image-error">Image not available</div>
      ) : (
        <img
          src={isDarkTheme 
            ? "https://raw.githubusercontent.com/cederlinkofficial1/CEDERLINK/main/src/components/images/BlackFractalMount.png"
            : "https://raw.githubusercontent.com/cederlinkofficial1/CEDERLINK/main/src/components/images/BlueFractalMount.png"
          }
          alt={isDarkTheme ? "Black mountain fractal" : "Blue mountain fractal"}
          onError={() => setImageError(true)}
        />
      )}
    </div>
  );
};

export default MountainImage;