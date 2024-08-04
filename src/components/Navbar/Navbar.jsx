import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  const [menu, setmenu] = useState("home");
  return (
    <div className="navbar">
      <img src={logo} alt="" />
      <ul className="nav-menu">
        <li>
          <p>Home</p>
          {menu === "home"}
        </li>
        <li>
          <p>About Me</p>
          {menu === "home"}
        </li>
        <li>
          <p>My Services</p>
          {menu === "home"}
        </li>
        <li>
          <p>Portfolio</p>
          {menu === "home"}
        </li>
        <li>
          <p>Contact Me</p>
          {menu === "home"}
        </li>
        <a href="https://wa.link/6tunfm" className="whatsapp social">
          <FontAwesomeIcon icon={faWhatsapp} size="2x" />
        </a>
      </ul>

      <div className="nav-connect">Connect With Me</div>
    </div>
  );
};

export default Navbar;
