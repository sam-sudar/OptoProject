import "./blogs.css";
import { blogData } from "../../data";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";

export default function BlogCards() {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/blogs/${id}`);
  };
  return (
    <div className="blog-cards-container">
      {blogData.map((blog) => (
        <div
          key={blog.id}
          className="blog-card"
          onClick={() => handleClick(blog.id)}
        >
          <img src={blog.image} alt={blog.title} />
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
