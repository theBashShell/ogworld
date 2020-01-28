import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-content">
        <div>one</div>
        <div className="nav-centered">
          <img className="nav-logo" src="/images/ogworld_logo.svg" />
        </div>
        <div>three</div>
      </div>
    </nav>
  );
};

export default Navbar;
