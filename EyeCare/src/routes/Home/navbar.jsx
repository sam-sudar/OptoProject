import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="home-nav">
      <div id="nav-left"></div>
      <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div id="nav-right" className={isOpen ? "open" : ""}>
        <a href={"/"} onClick={toggleMenu}>
          Home
        </a>
        <a href={"/about"} onClick={toggleMenu}>
          About me
        </a>
        <a href={"/services"} onClick={toggleMenu}>
          Services
        </a>
        <a href={"/blogs"} onClick={toggleMenu}>
          Blogs
        </a>
        <div id="contact-div">
          <a href={"/contacts"} onClick={toggleMenu}>
            <strong>Contacts</strong>
          </a>
        </div>
      </div>
    </div>
  );
}
