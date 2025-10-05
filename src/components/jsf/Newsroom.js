import React from "react";
import "./Newsroom.css";
import { useOutletContext, Link } from "react-router-dom";
import NewsroomButton1 from "./NewsroomButton1";
import NewsroomButton2 from "./NewsroomButton2";
import NewsroomButton3 from "./NewsroomButton3";
import NewsroomButton4 from "./NewsroomButton4";

const Newsroom = () => {
    // Get theme state from outlet context
    const [isDarkTheme] = useOutletContext();
    
    return(
        <div className={`newsroom ${isDarkTheme ? 'dark-theme' : ''}`}>
            <div className="newsroom-buttons-container">
                <NewsroomButton1 isDarkTheme={isDarkTheme} />
                <NewsroomButton2 isDarkTheme={isDarkTheme} />
                <NewsroomButton3 isDarkTheme={isDarkTheme} />
                <NewsroomButton4 isDarkTheme={isDarkTheme} />
            </div>
            
            <div className="newsroom-content">
                
                {/* Make title clickable by wrapping it in Link */}
                <div className="newsroom-text-container">
                    <Link to="/newsroom" className="newsroom-title-link">
                        <h2 className="newsroom-title">
                            NEWSROOM
                            <img 
                                src={isDarkTheme 
                                    ? "https://raw.githubusercontent.com/cederlinkofficial1/CEDERLINK/main/src/components/images/NEWSROOM_ArrowDarkTheme.png"
                                    : "https://raw.githubusercontent.com/cederlinkofficial1/CEDERLINK/main/src/components/images/NEWSROOM_Arrow.png"
                                }
                                alt="Arrow"
                                className="newsroom-arrow"
                            />
                        </h2>
                        <div className="know-more-text">Read our Articles</div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Newsroom;