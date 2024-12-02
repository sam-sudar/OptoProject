import { useState } from "react";
import mainLogo from "../../assets/Eye&MyCare.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <div className="nav_logo">
        {/* Add logo or branding here */}
        <img
          id="main_logo"
          src={mainLogo}
          alt="Eye & My Care Optics and Opticals Store in Thuckalay"
        />
      </div>
      <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <a href="/">Home</a>
        <a href="/about">About Us</a>
        <a href="/services">Services</a>
        <a href="/blogs">Blogs</a>
        <div className="contact-btn">
          <a href="/contacts">
            <strong>Contact</strong>
          </a>
        </div>
      </div>
    </div>
  );
}
