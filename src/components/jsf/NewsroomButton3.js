import React, { useState } from "react";

const NewsroomButton3 = ({ isDarkTheme }) => {
  // Add state to track hover
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`newsroom-button ${isDarkTheme ? 'dark-theme' : ''}`}
      style={{
        backgroundImage: isDarkTheme 
          ? `url('https://raw.githubusercontent.com/cederlinkofficial1/CEDERLINK/main/src/components/images/DarkMode_3.svg')`
          : `url('https://raw.githubusercontent.com/cederlinkofficial1/CEDERLINK/main/src/components/images/LightMode_3.svg')`,
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
              ? "https://raw.githubusercontent.com/cederlinkofficial1/CEDERLINK/main/src/components/images/NEWSROOM_ArrowDarkTheme.svg"
              : "https://raw.githubusercontent.com/cederlinkofficial1/CEDERLINK/main/src/components/images/NEWSROOM_Arrow_LightTheme.svg"
            }
            alt="Arrow"
            className="hover-arrow"
          />
        ) : (
          <img 
            src={isDarkTheme
              ? "https://raw.githubusercontent.com/cederlinkofficial1/CEDERLINK/main/src/components/images/Thread_Symbol_DarkTheme.svg"
              : "https://raw.githubusercontent.com/cederlinkofficial1/CEDERLINK/main/src/components/images/Thread_Symbol_LighTheme.svg"
            }
            alt="X logo"
          />
        )}
      </div>
      
      <button className="newsroom-btn"></button>
    </div>
  );
};

export default NewsroomButton3;