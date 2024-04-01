import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./nav.css";

function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "brown" }}
      >
        <div className="container-fluid">
          <ul className="navbar-nav p-2">
            <li className="nav-item me-3">
              <Link to="/todo" className="nav-link" aria-current="page">
                Todo
              </Link>
            </li>
            <li className="nav-item me-3">
              <Link to="/card" className="nav-link" aria-current="page">
                Card Item
              </Link>
            </li>
            <li className="nav-item me-3">
              <Link to="/notify" className="nav-link" aria-current="page">
                NotificationAlert
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
