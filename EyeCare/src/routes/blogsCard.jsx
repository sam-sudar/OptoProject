import "./blogs.css";
import { blogData } from "../../data";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";

export default function BlogCards() {
  const handleClick = (link) => {
    window.location.href = link;
  };

  return (
    <div className="blog-cards-container">
      {blogData.map((blog) => (
        <div
          key={blog.id}
          className="blog-card"
          onClick={() => handleClick(blog.link)} // Redirects to the unique link
        >
          <img
            src={blog.image}
            alt="Thuckalay, Eye Care Optometrist and Optics"
          />
          <h3>{blog.title}</h3>
          <h4>
            <FontAwesomeIcon className="icon" icon={faPenNib} />
            {blog.author}
          </h4>
        </div>
      ))}
    </div>
  );
}
