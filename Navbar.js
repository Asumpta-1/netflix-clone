import React, { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [show, handleShow] = useState(false);

  function handleScroll() {
    if (window.scrollY > 100) {
      handleShow(true);
    } else handleShow(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Netflix_2014_logo.svg"
        alt="Netflix Logo"
      />

      <img
        className="nav_avator"
        src="https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png"
        alt="Netflix Logo"
      />
    </div>
  );
}

export default Navbar;
