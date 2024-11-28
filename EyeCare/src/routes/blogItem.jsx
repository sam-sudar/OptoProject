import EyeLogo from "../assets/react.svg";
import "./index.css";

export default function BlogItem() {
  return (
    <div className="blogs-main">
      <h1 className="blogs-title">This is the title of the blog</h1>
      <div className="blogs-content">
        <div className="blogs-text">
          <img
            className="logo eye-logo"
            src={EyeLogo}
            alt="Thuckalay, Eye Care Optometrist and Optics"
          />
          <p>This is a p tag</p>
          <h1>This is the main text</h1>
        </div>
        <div className="blogs-image"></div>
      </div>
    </div>
  );
}
