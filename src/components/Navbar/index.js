import React from "react";
import { Link } from "react-router-dom";
// import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
<div>
    <div className="articleContainer">
        <div className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="mr-auto brand font-weight-bold" to="/">
                    John Toth
                </Link>
                {/* <a className="mr-auto brand font-weight-bold" href="./index.html">John Toth</a> */}
                <div className="navbar navbar-expand-lg bg-light">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <h2 className="invisible">Menu options for website</h2>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="johnNavLink aboutTextColor" to="/Portfolio">
                                    Portfolio
                                </Link>
                                {/* <a className="johnNavLink aboutTextColor" href="./portfolio.html">Portfolio</a> */}
                            </li>
                            <li className="nav-item font-weight-bold active">
                                <Link className="johnNavLink aboutTextColor" to="/About">
                                    About
                                </Link>
                                {/* <a className="johnNavLink aboutTextColor" href="./index.html">About</a> */}
                            </li>
                            <li className="nav-item">
                                <Link className="johnNavLink aboutTextColor" to="/Resume">
                                    Resume
                                </Link>
                                {/* <a className="johnNavLink aboutTextColor" href="./resume.html">Resume</a> */}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}

export default Navbar;
