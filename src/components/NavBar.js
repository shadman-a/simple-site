import React from "react";
import { NavLink } from "react-router-dom";

const link = {
  padding: "12px",
  margin: "0 6px 6px"
};

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/"  style={link}>
        Home
      </NavLink>
      <NavLink to="/resume"  style={link}>
        Resume
      </NavLink>
      <NavLink to="/contact"  style={link}>
        Contact
      </NavLink>
    </div>
  );
};

export default NavBar;