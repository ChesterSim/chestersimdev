import React from "react";
import { NavLink } from 'react-router-dom';
import "../styles.css";

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <div class="links">
        <NavLink activeStyle={activeStyle} className="navlink" id="home-link" exact to="/">Home</NavLink>
        <NavLink activeStyle={activeStyle} className="navlink" id="about-link" to="/about">About Me</NavLink>
        <NavLink activeStyle={activeStyle} className="navlink" id="education-link" to="/education">Education</NavLink>
        <NavLink activeStyle={activeStyle} className="navlink" id="experience-link" to="/experiences">Experiences</NavLink>
        <NavLink activeStyle={activeStyle} className="navlink" id="contact-link" to="/contact">Contact</NavLink>
      </div>

    </nav>
  )
}

const activeStyle = {
  color: "orange"
}

export default Navbar;