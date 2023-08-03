import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/css/styles.css";

export default function Navbar(props) {

    const location = useLocation();

    const isActive = (pathname) => {
        return location.pathname === pathname
    }

    return (
        <div className="Navbar">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand fs-2" to="/"> <img id="logo" src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/Wizarding_World_logo.svg/1200px-Wizarding_World_logo.svg.png" alt="logo" /> Mystical Voyages </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link${isActive("/") ? " active fw-bold" : ""}`} to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link${isActive("/api/explore") ? " active fw-bold" : ""}`} to="/api/explore">Explore</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link${isActive("/contact") ? " active fw-bold" : ""}`} to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link${isActive("/about") ? " active fw-bold" : ""}`} to="/about">About</Link>
                            </li>
                            <button onClick={props.onLogout}> Logout </button>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
