import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary bg-dark"
      data-bs-theme="dark"
    >
      <div className="container">
        <NavLink to="/" className="navbar-brand text-danger" href="#">
          NEXUS
        </NavLink>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink
              to="/"
              className="nav-link active"
              aria-current="page"
              href="#"
            >
              Home
            </NavLink>
            <NavLink to="/" className="nav-link" href="#">
              References
            </NavLink>
            <NavLink to="/" className="nav-link" href="#">
              Rules
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
