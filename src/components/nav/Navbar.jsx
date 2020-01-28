import React from "react";
import { Link } from "gatsby";
import "./navbar.css";

const Navbar = ({ page }) => {
  return (
    <nav>
      <div className="nav-content">
        <div>one</div>
        <div className="nav-centered">
          <Link to={page}>
            <img className="nav-logo" src="/images/ogworld_logo.svg" />
          </Link>
        </div>
        <div>three</div>
      </div>
    </nav>
  );
};

export default Navbar;
