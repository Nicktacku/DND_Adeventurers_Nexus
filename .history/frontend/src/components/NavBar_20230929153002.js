import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary bg-dark"
      data-bs-theme="dark"
    >
      <div className="container">
        <a className="navbar-brand text-danger" href="#">
          NEXUS
        </a>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
            <a className="nav-link" href="#">
              References
            </a>
            <a className="nav-link" href="#">
              Rules
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
