import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";
import { blogData } from "../../data";
import "./blogs.css";

export default function BlogCards() {
  const handleClick = (link) => {
    window.location.href = link;
  };

  return (
    <div className="blog-cards-container">
      {blogData.map((blog, index) => (
        <div
          key={blog.id}
          className="blog-card"
          onClick={() => handleClick(blog.link)}
          data-aos="fade-up"
          data-aos-delay={`${index * 100}`} // Stagger animation for each card
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
