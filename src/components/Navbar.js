import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown">
              Section
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="about.html">About</a></li>
              <li><a className="dropdown-item" href="education.html">Education</a></li>
              <li><a className="dropdown-item" href="projects.html">Projects</a></li>
              <li><a className="dropdown-item" href="contact.html">Contact</a></li>
            </ul>
          </li>
        </ul>
        <button className="btn btn-dark">Dark Mode</button>
      </div>
    </nav>
  );
}

export default Navbar;
