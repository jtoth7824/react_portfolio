import React from "react";
import { Link, useLocation } from "react-router-dom";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
    const location = useLocation();
  return (

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
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/Portfolio" className={location.pathname === "/Portfolio"
                                            ? "johnNavLink aboutTextColor active"
                                            : "johnNavlink aboutTextColor"
                                }>
                                    Portfolio
                                </Link>
                                {/* <a className="johnNavLink aboutTextColor" href="./portfolio.html">Portfolio</a> */}
                            </li>
                            <li className="nav-item">
                                <Link to="/About" className={location.pathname === "/About"
                                        ? "johnNavLink aboutTextColor active"
                                        : "johnNavLink aboutTextColor"
                                }>
                                    About
                                </Link>
                                {/* <a className="johnNavLink aboutTextColor" href="./index.html">About</a> */}
                            </li>
                            <li className="nav-item">
                                <Link  to="/Resume" className={location.pathname === "/Resume"
                                        ? "johnNavLink aboutTextColor active"
                                        : "johnNavLink aboutTextColor"
                                }>
                                    Resume
                                </Link>
                                {/* <a className="johnNavLink aboutTextColor" href="./resume.html">Resume</a> */}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <br />
        <br />
    </div>
  );
}

export default Navbar;
