import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";

interface NavbarProps {
  companyName?: string;
  phoneNumber?: string;
}

const ClassicNavbar: React.FC<NavbarProps> = ({
  companyName = "MeanMobileShop",
  phoneNumber = "(66+) 012-345678",
}) => {
  const [activePage, setActivePage] = useState<string>("Home");
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link
          to="/"
          className="navbar-logo"
          onClick={() => setActivePage("Home")}
        >
          {companyName}
        </Link>

        <button className="hamburger-btn" onClick={toggleMenu}>
          &#9776;
        </button>

        <div className={`navbar-menu ${menuOpen ? "open" : ""}`}>
          <Link
            to="/"
            className={`navbar-item ${activePage === "Home" ? "active" : ""}`}
            onClick={() => {
              setActivePage("Home");
              setMenuOpen(false);
            }}
          >
            Home
          </Link>
          {/* <Link
                        to="/about"
                        className={`navbar-item ${activePage === "About" ? "active" : ""}`}
                        onClick={() => {
                            setActivePage("About");
                            setMenuOpen(false);
                        }}
                    >
                        About
                    </Link>
                    <Link
                        to="/contact"
                        className={`navbar-item ${activePage === "Contact" ? "active" : ""}`}
                        onClick={() => {
                            setActivePage("Contact");
                            setMenuOpen(false);
                        }}
                    >
                        Contact
                    </Link> */}
          <Link
            to="/phone"
            className={`navbar-item ${activePage === "Phone" ? "active" : ""}`}
            onClick={() => {
              setActivePage("Phone");
              setMenuOpen(false);
            }}
          >
            Phone
          </Link>
        </div>

        <div className="navbar-right">
          <span className="phone-number">{phoneNumber}</span>
          <button className="auth-button">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/Signin"
            >
              Sign In
            </Link>
          </button>
          <button className="auth-button">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/Signup"
            >
              Sign Up
            </Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default ClassicNavbar;
