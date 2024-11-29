import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <div className="logo">
        {/* Add logo or branding here */}
        <h1>Eye & My Care</h1>
      </div>
      <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <a href="/">Home</a>
        <a href="/about">About Me</a>
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
