import React from "react";
import { useOutletContext } from "react-router-dom";
import "./NewsroomPage.css";

const NewsroomPage = () => {
    const [isDarkTheme] = useOutletContext();

    return (
        <div className={`newsroom-page ${isDarkTheme ? 'dark-theme' : ''}`}>
            <h1 className="newsroom-page-title">NEWSROOM</h1>
            
            {/* Featured Article - Founders Insights */}
            <div className="featured-article">
                <div className="featured-article-content">
                    <div className="featured-article-text">
                        <h2>Founders Insights</h2>
                        <p>Exclusive perspectives from our leadership team on industry trends, company vision, and strategic initiatives for the upcoming fiscal year.</p>
                        <span className="article-date">October 3, 2025</span>
                        <a href="#" className="read-more">Read Full Article</a>
                    </div>
                    <div className="featured-article-image">
                        {/* You can uncomment and use an actual image when available */}
                        {/* <img src="https://raw.githubusercontent.com/cederlinkofficial1/CEDERLINK/main/src/components/images/founders.jpg" alt="Founders" /> */}
                    </div>
                </div>
            </div>
            
            <div className="articles-container">
                {/* Article 1 */}
                <div className="article-card">
                    <div className="article-image">
                        {/* <img src="https://raw.githubusercontent.com/cederlinkofficial1/CEDERLINK/main/src/components/images/article1.jpg" alt="Article 1" /> */}
                    </div>
                    <div className="article-content">
                        <h3>Latest Updates on Enterprise Solutions</h3>
                        <p>A comprehensive look at the newest developments in our enterprise offerings...</p>
                        <span className="article-date">October 1, 2025</span>
                        <a href="#" className="read-more">Read More</a>
                    </div>
                </div>
                
                {/* Article 2 */}
                <div className="article-card">
                    <div className="article-image">
                        {/* <img src="https://raw.githubusercontent.com/cederlinkofficial1/CEDERLINK/main/src/components/images/article2.jpg" alt="Article 2" /> */}
                    </div>
                    <div className="article-content">
                        <h3>CederLink Expands Global Reach</h3>
                        <p>Our latest international partnerships and expansion strategies...</p>
                        <span className="article-date">September 15, 2025</span>
                        <a href="#" className="read-more">Read More</a>
                    </div>
                </div>
                
                {/* Article 3 */}
                <div className="article-card">
                    <div className="article-image">
                        {/* <img src="https://raw.githubusercontent.com/cederlinkofficial1/CEDERLINK/main/src/components/images/article3.jpg" alt="Article 3" /> */}
                    </div>
                    <div className="article-content">
                        <h3>Technology Insights: Q3 2025</h3>
                        <p>Analysis of emerging technologies and their impact on our industry...</p>
                        <span className="article-date">August 28, 2025</span>
                        <a href="#" className="read-more">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsroomPage;