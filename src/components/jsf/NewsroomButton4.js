import React, { useState } from "react";

const NewsroomButton4 = ({ isDarkTheme }) => {
  // Add state to track hover
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`newsroom-button ${isDarkTheme ? 'dark-theme' : ''}`}
      style={{
        backgroundImage: isDarkTheme 
          ? `url('https://raw.githubusercontent.com/cederlinkofficial1/CEDERLINK/main/src/components/images/DarkMode_4.png')`
          : `url('https://raw.githubusercontent.com/cederlinkofficial1/CEDERLINK/main/src/components/images/LightMode_4.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Conditional rendering based on hover state AND theme */}
      <div className="section-icon x-icon">
        {isHovered ? (
          <img 
            src={isDarkTheme
              ? "https://raw.githubusercontent.com/cederlinkofficial1/CEDERLINK/main/src/components/images/NEWSROOM_ArrowDarkTheme.png"
              : "https://raw.githubusercontent.com/cederlinkofficial1/CEDERLINK/main/src/components/images/Arrow_NewsroomButton_LightTheme.png"
            }
            alt="Arrow"
            className="hover-arrow"
          />
        ) : (
          <img 
            src={isDarkTheme
              ? "https://raw.githubusercontent.com/cederlinkofficial1/CEDERLINK/main/src/components/images/Medium_Symbol_DarkTheme.png"
              : "https://raw.githubusercontent.com/cederlinkofficial1/CEDERLINK/main/src/components/images/Medium_Symbol_LightTheme.png"
            }
            alt="X logo"
          />
        )}
      </div>
      
      <button className="newsroom-btn"></button>
    </div>
  );
};

export default NewsroomButton4;