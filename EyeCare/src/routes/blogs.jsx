// import BlogItem from "./blogItem";
import BlogCards from "./blogsCard";
import Navbar from "./Home/navbar";
import "./blogs.css";

export default function Blogs() {
  return (
    <>
      <Navbar />
      <div className="blogs-home">
        <p>The blog</p>
        <h1>Writings from our team</h1>
        <p>The latest industry news, interviews, technologies</p>
        <BlogCards />
      </div>
    </>
  );
}
