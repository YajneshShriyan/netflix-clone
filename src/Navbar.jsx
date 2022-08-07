import React, { useState, useEffect } from "react";
import { Navigate } from "react-router";
import "./Navbar.css";

const Navbar = () => {
  const [show, handleShow] = useState(false);
  const history = Navigate();
  const transtionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transtionNavBar);
    // return window.removeEventListener("scroll", transtiionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          onClick={() => history.push("/")}
          className="nav__logo"
          src="https://www.pxpng.com/public/uploads/preview/-11621687998ytrgnduxoh.png"
          alt="Netflix"
        />
        <img
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="avatar"
          onClick={() => history.push("/profile")}
        />
      </div>
    </div>
  );
};

export default Navbar;