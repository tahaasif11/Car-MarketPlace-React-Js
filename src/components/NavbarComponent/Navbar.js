import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
            <img src="./logo.svg" alt="Logo" />
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto gap-5">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Search</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="about-us">About</Link>
                    </li>
                </ul>
                <button className="btn my-2 my-sm-0" type="submit" style={{ backgroundColor: '#5A67D8', color: 'white' }}>Submit Listing</button>
            </div>
        </nav>
    );
}
