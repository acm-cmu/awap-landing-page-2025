import "../styles/Navbar.css";
import React, { useState } from "react";
import { Link } from "react-scroll";
import { slide as Menu } from "react-burger-menu";
import awap_logo from "../AWAP-2025-Logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="home" smooth={true} offset={-0.08 * window.innerHeight}>
          <div className="navbar-logo">
            <img src={awap_logo} width="150px" alt="AWAP logo" />
          </div>
        </Link>
        <div className="links-container">
          <Link to="home" smooth={true} offset={-0.08 * window.innerHeight}>
            <div className="link">Home</div>
          </Link>
          <Link to="register" smooth={true} offset={-0.04 * window.innerHeight}>
            <div className="link">Event Details</div>
          </Link>
          <Link to="about" smooth={true} offset={-0.04 * window.innerHeight}>
            <div className="link">About</div>
          </Link>
          <Link to="past" smooth={true} offset={-0.06 * window.innerHeight}>
            <div className="link">Past Challenges</div>
          </Link>
          <Link to="sponsors" smooth={true} offset={-0.12 * window.innerHeight}>
            <div className="link">Sponsors</div>
          </Link>
        </div>
      </div>
      <div className="mobile-button">
        <Menu
          right
          isOpen={menuOpen}
          onStateChange={(state) => setMenuOpen(state.isOpen)}
        >
          <Link to="home" smooth={true} offset={-0.04 * window.innerHeight}>
            <div onClick={() => setMenuOpen(false)} className="link">
              Home
            </div>
          </Link>
          <Link to="about" smooth={true} offset={-0.04 * window.innerHeight}>
            <div onClick={() => setMenuOpen(false)} className="link">
              About
            </div>
          </Link>
          <Link to="register" smooth={true} offset={-0.04 * window.innerHeight}>
            <div onClick={() => setMenuOpen(false)} className="link">
              Register
            </div>
          </Link>
          <Link to="past" smooth={true} offset={-0.08 * window.innerHeight}>
            <div onClick={() => setMenuOpen(false)} className="link">
              Past Challenges
            </div>
          </Link>
          <Link to="sponsors" smooth={true} offset={-0.1 * window.innerHeight}>
            <div onClick={() => setMenuOpen(false)} className="link">
              Sponsors
            </div>
          </Link>
        </Menu>
      </div>
    </nav>
  );
};

export default Navbar;
