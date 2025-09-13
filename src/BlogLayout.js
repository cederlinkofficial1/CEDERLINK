import React, { useState } from "react";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";

const BlogLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  // Check if we're on the main blogs page (not a specific blog)
  const isMainBlogsPage = location.pathname === "/blogs";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle('menu-open', !isMenuOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    if (isMenuOpen) {
      toggleMenu();
    }
  };

  return (
    <div className="blog-page">
      <div className="blog-header">
        {/* <Link to="/" className="blog-back-btn">
          <span className="arrow">←</span> Back to Home 
        </Link> */}
        
        {/* Only show navigation on main blogs page */}
        {isMainBlogsPage && (
          <nav className="blog-banner-nav">
            <ul>
              <li onClick={() => handleNavigation('/')}><Link to="/">Home</Link></li>
              <li onClick={() => handleNavigation('/articles')}><Link to="/articles">Articles</Link></li>
              <li onClick={() => handleNavigation('/blogs')}><Link to="/blogs">Blogs</Link></li>
              <li onClick={() => handleNavigation('/contact')}><Link to="/contact">Contact Us</Link></li>
              <li onClick={() => handleNavigation('/about')}><Link to="/about">About Us</Link></li>
            </ul>
          </nav>
        )}
        
        {/* Conditionally show different header text based on page */}
        {isMainBlogsPage ? (
          <h1>Recent Blog Posts</h1>
        ) : (
          <h1></h1>
        )}
        
        {/* Only show hamburger menu on main blogs page */}
        {isMainBlogsPage && (
          <div className={`blog-hamburger-menu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <div className="hamburger-icon">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}
        
        {/* Mobile menu */}
        {isMainBlogsPage && (
          <div className={`blog-mobile-menu ${isMenuOpen ? 'open' : ''}`}>
            <ul>
              <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
              <li><Link to="/articles" onClick={toggleMenu}>Articles</Link></li>
              <li><Link to="/blogs" onClick={toggleMenu}>Blogs</Link></li>
              <li><Link to="/contact" onClick={toggleMenu}>Contact Us</Link></li>
              <li><Link to="/about" onClick={toggleMenu}>About Us</Link></li>
            </ul>
          </div>
        )}
        
        {/* Menu overlay */}
        {isMainBlogsPage && (
          <div className={`blog-menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}></div>
        )}
      </div>
      
      <div className="blog-content">
        <Outlet />
      </div>
    </div>
  );
};

export default BlogLayout;