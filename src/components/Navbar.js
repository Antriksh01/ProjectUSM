import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/">
          <div className="logo">ELIPSO</div>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <Link to="/" class="nav-link">
              Home
            </Link>
            <Link to="/Pages" class="nav-link">
              Pages
            </Link>
            <Link to="/Services" class="nav-link">
              Services
            </Link>
            <Link to="/Portfolio" class="nav-link">
              Portfolio
            </Link>
            <Link to="/About" class="nav-link">
              Blog
            </Link>
            <Link to="/Contact" class="nav-link">
              Contact
            </Link>
          </ul>
        </div>
        <div class="pt-site-footer__submit">
          <input type="email" placeholder="search" />
          <button>
            <FaSearch />
          </button>
        </div>
      </nav>

      {/* <h1>hello</h1> */}
    </>
  );
};

export default Navbar;
