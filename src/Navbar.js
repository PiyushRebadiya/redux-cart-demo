import React from "react";
import "./navbar.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
  } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="nav">
      <ul className="side">
        <li>
          <Link to="/home" className="link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/cart" className="link">
            Cart
          </Link>
        </li>
        {localStorage.getItem("login") ? (
          <li>
            <Link to="/clear" className="link">
              Log Out
            </Link>
          </li>
        ) : (
          <li>
            <Link to="/" className="link">
              Log In
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
