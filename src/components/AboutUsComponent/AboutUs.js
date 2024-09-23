import React from 'react';
import './AboutUs.css'; // Import the CSS file

export default function AboutUs() {
    return (
        <div className="container">
            <header className="header">
                <h1 className="headerTitle">About Us</h1>
            </header>
            <section className="content">
                <p className="paragraph">
                    Welcome to our application! We are dedicated to providing the best
                    experience possible. Our team is passionate about delivering high-quality
                    solutions that meet your needs.
                </p>
                <p className="paragraph">
                    Our mission is to [insert mission statement or brief description of what your organization does].
                </p>
                <p className="paragraph">
                    Our team consists of experienced professionals who are committed to excellence.
                    Feel free to contact us for more information or if you have any questions.
                </p>
            </section>
            <footer className="footer">
                <p className="footerText">© {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
            </footer>
        </div>
    );
}
