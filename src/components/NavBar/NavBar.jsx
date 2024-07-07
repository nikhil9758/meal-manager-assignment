import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavBar.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="menu-icon" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
          <h1 className="navbar-logo">Meal Store</h1>

          <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item menu-icon" onClick={toggleMenu}>
              <FaTimes />
            </li>
            <li className="nav-item">
              <NavLink to="/" className="nav-links" onClick={toggleMenu}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/menu" className="nav-links" onClick={toggleMenu}>
                Menu
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/favourites"
                className="nav-links"
                onClick={toggleMenu}
              >
                My Favourites
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/generator"
                className="nav-links"
                onClick={toggleMenu}
              >
                Meal Generator
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-links" onClick={toggleMenu}>
                About Me
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;
