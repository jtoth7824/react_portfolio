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
                <div className="navbar navbar-expand-lg bg-light">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                        <li className="nav-item">
                                <Link  to="/Portfolio" className={location.pathname === "/Portfolio"
                                        ? "johnNavLink aboutTextColor font-weight-bold active"
                                        : "johnNavLink aboutTextColor"
                                }>
                                    Portfolio
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/About" className={location.pathname === "/About"
                                        ? "johnNavLink aboutTextColor font-weight-bold active"
                                        : "johnNavLink aboutTextColor"
                                }>
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link  to="/Resume" className={location.pathname === "/Resume"
                                        ? "johnNavLink aboutTextColor font-weight-bold active"
                                        : "johnNavLink aboutTextColor"
                                }>
                                    Resume
                                </Link>
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
