import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Import the CSS file

export default function Footer() {
    return (
        <footer className="footer">
            <div>
                <img src="./logo.svg" alt="Logo" />
            </div>

            <div className="lorem">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, molestias rem temporibus minus,<br />
                recusandae culpa expedita eius saepe dolores sit dolore voluptatem a incidunt veniam optio error nobis quo nostrum!
            </div>

            <div className="anchorContainer">
                <Link to="about-us" className="anchor">About</Link>
                <Link to="/" className="anchor">Home</Link>
                <Link to="/" className="anchor">Search</Link>
            </div>

            <div className="socialMedia">
                <img src="./facebook.svg" alt="Facebook" className="socialIcon" />
                <img src="./instagram.svg" alt="Instagram" className="socialIcon" />
                <img src="./github.svg" alt="GitHub" className="socialIcon" />
                <img src="./twitter.svg" alt="Twitter" className="socialIcon" />
            </div>
        </footer>
    );
}
