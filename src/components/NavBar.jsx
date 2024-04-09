import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";

const NavBar = ({ token, setToken }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setToken(null);
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="nav-title">
        <h1>FSA Capstone</h1>
      </div>
      <div className="nav-links">
        <Link to="/" className="nav-link">
          Products
        </Link>

        {token ? (
          <>
            <Link to="/cart" className="nav-link">
              Cart
            </Link>
            <Link to="/checkout" className="nav-link">
              Checkout
            </Link>

            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="nav-link">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
