import React from 'react';
import GetInTouch from '../GetInTouchComponent/GetInTouch';
import SearchCar from '../SearchCarComponent/SearchCar';
import SearchByType from '../SearchByTypeComponent/SearchByType';
import './HomePage.css';
export default function HomePage() {
    return (
        <>
            <div className="container">
                <header className="header">
                    <h1 className="headerTitle">Welcome to Our Website!</h1>
                </header>
                <section className="content">
                    <p className="paragraph">
                        We're excited to have you here. Our website offers a variety of services
                        designed to meet your needs and exceed your expectations.
                    </p>
                    <p className="paragraph">
                        Explore our offerings and learn more about what we do. Whether you're looking
                        for [specific services], or just want to stay updated with our latest news,
                        you've come to the right place.
                    </p>
                    <p className="paragraph">
                        Feel free to navigate through our site and get in touch if you have any questions
                        or need assistance. We're here to help!
                    </p>
                </section>
                <footer className="footer">
                    <p className="footerText">© {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
                </footer>
            </div>
            <div style={{ paddingBottom: '200px' }}>
                <SearchCar />
            </div>
            <SearchByType />
            <GetInTouch />
        </>
    );
}
