import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/styles.css";

export default function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <div className="Footer">
            <div className="container">
                <footer className="py-3 my-4">
                    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                        <li className="nav-item"><Link to="/" className="nav-link px-2 text-body-secondary">Home</Link></li>
                        <li className="nav-item"><Link to="/explore" className="nav-link px-2 text-body-secondary">Explore</Link></li>
                        <li className="nav-item"><Link to="/" className="nav-link px-2 text-body-secondary">FAQs</Link></li>
                        <li className="nav-item"><Link to="/contact" className="nav-link px-2 text-body-secondary">Contact</Link></li>
                        <li className="nav-item"><Link to="/about" className="nav-link px-2 text-body-secondary">About</Link></li>
                    </ul>
                    <p className="text-center text-body-secondary footer-desc">© {currentYear} Mystical Voyages </p>
                </footer>
            </div>
        </div>
    )
}
