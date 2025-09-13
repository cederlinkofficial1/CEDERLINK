import React from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "./blogData";

const Blogs = () => {
  // Make sure we have at least 4 blog posts for the layout
  const displayPosts =
    blogPosts.length >= 4
      ? blogPosts.slice(0, 4)
      : [
          ...blogPosts,
          ...Array(4 - blogPosts.length).fill({
            id: "placeholder",
            title: "Coming Soon",
            abstract: "New content will be available soon.",
            publishDate: "Future",
            genre: "Announcement",
          }),
        ];

  return (
    <>
      <div className="magazine-grid">
        {/* Featured area (large box - top left) */}
        <div className="magazine-featured">
          <h1>Tagline Area</h1>
          <p>Featured content and highlights from our latest articles.</p>
        </div>

        {/* Blog box 1 (small box - top right) */}
        <div className="magazine-item">
          <Link to={`/blogs/${displayPosts[0].id}`} className="magazine-link">
            <h2>{displayPosts[0].title}</h2>
            <div className="blog-meta">
              <span className="blog-date">{displayPosts[0].publishDate}</span>
              <span className="blog-genre">{displayPosts[0].genre}</span>
            </div>
            <p>{displayPosts[0].abstract}</p>
          </Link>
        </div>

        {/* Blog box 2 (large box - bottom left) */}
        <div className="magazine-item magazine-large">
          <Link to={`/blogs/${displayPosts[1].id}`} className="magazine-link">
            <h2>{displayPosts[1].title}</h2>
            <div className="blog-meta">
              <span className="blog-date">{displayPosts[1].publishDate}</span>
              <span className="blog-genre">{displayPosts[1].genre}</span>
            </div>
            <p>{displayPosts[1].abstract}</p>
          </Link>
        </div>

        {/* Blog box 3 (small box - bottom right) */}
        <div className="magazine-item">
          <Link to={`/blogs/${displayPosts[2].id}`} className="magazine-link">
            <h2>{displayPosts[2].title}</h2>
            <div className="blog-meta">
              <span className="blog-date">{displayPosts[2].publishDate}</span>
              <span className="blog-genre">{displayPosts[2].genre}</span>
            </div>
            <p>{displayPosts[2].abstract}</p>
          </Link>
        </div>
      </div>

      {/* View all blogs button */}
      {/* <div className="view-all-blogs">
        <button className="view-all-button">View All Blogs</button>
      </div> */}
    </>
  );
};

export default Blogs;