import React from "react";
import { useParams, Link } from "react-router-dom";
import { blogPosts } from "./blogData";

const BlogDetail = () => {
  const { blogId } = useParams();
  const blog = blogPosts.find(post => post.id === parseInt(blogId));
  
  if (!blog) {
    return <div className="blog-not-found">Blog post not found</div>;
  }

  return (
    <div className="blog-detail">
      <h1>{blog.title}</h1>
      <div className="blog-meta-detail">
        <span className="blog-date-detail">{blog.publishDate}</span>
        <span className="blog-genre-detail">{blog.genre}</span>
      </div>
      <div className="blog-content">
        {blog.content.split('\n\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <Link to="/blogs" className="back-to-blogs">
        ← Back to all blogs
      </Link>
    </div>
  );
};

export default BlogDetail;