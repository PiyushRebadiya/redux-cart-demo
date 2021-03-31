import React from "react";
import "./navbar.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
  } from "react-router-dom";
  import { useSelector } from 'react-redux'


const Navbar = () => {
   const count = useSelector((state) => state.cart.cart.length)
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
            {
              count > 0 && <span className="badge badge-danger">{count}</span>
            }
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
