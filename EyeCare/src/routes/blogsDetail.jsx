// BlogDetail.js
import { useParams } from "react-router-dom";
import { blogData } from "../../data";
import Navbar from "./Home/navbar";

const BlogDetail = () => {
  const { id } = useParams();
  console.log(id);
  const blog = blogData.find((blog) => blog.id === parseInt(id));

  if (!blog) return <div>Blog not found</div>;

  return (
    <>
      <Navbar />
      <div className="blog-detail">
        <h1>{blog.title}</h1>
        <div className="blog-detail-div">
          <img src={blog.image} alt={blog.title} />
          <p>{blog.content}</p>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
