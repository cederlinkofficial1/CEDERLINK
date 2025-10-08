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
                
                <div className="newsroom-text-container">
                    <h2 className="newsroom-title">
                        NEWSROOM
                        <img 
                            src={isDarkTheme 
                                ? "https://raw.githubusercontent.com/cederlinkofficial1/CEDERLINK/main/src/components/images/NEWSROOM_ArrowDarkTheme.svg"
                                : "https://raw.githubusercontent.com/cederlinkofficial1/CEDERLINK/main/src/components/images/NEWSROOM_Arrow_LightTheme.svg"
                            }
                            alt="Arrow"
                            className="newsroom-arrow"
                        />
                    </h2>
                    {/* <div className="know-more-text">Read our Articles</div> */}
                </div>
            </div>
        </div>
    );
};

export default Newsroom;