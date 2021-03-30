import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        John Toth
      </Link>
      <div>

      <div>
    <div class="articleContainer">
       {/* <div class="navbar navbar-expand-lg navbar-light bg-light"> */}
            <div class="container">
                <a class="mr-auto brand font-weight-bold" href="./index.html">John Toth</a>
                <div class="navbar navbar-expand-lg bg-light">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <h2 class="invisible">Menu options for website</h2>
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="johnNavLink aboutTextColor" href="./portfolio.html">Portfolio</a>
                            </li>
                            <li class="nav-item font-weight-bold active">
                                <a class="johnNavLink aboutTextColor" href="./index.html">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="johnNavLink aboutTextColor" href="./resume.html">Resume</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/discover"
              className={window.location.pathname === "/discover" ? "nav-link active" : "nav-link"}
            >
              Discover
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/search"
              className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
            >
              Search
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
