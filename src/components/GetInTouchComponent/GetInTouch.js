import React from 'react';
import { Link } from 'react-router-dom';
import './GetInTouch.css'; // Import the CSS file

export default function GetInTouch() {
    return (
        <section className="section">
            <div className="grid">
                {/* Image Section */}
                <div className="imageContainer">
                    <img
                        alt="Luxury car parked"
                        src="https://hips.hearstapps.com/hmg-prod/images/rt-mercedes-benz-cpo-1-1531414981.jpg?crop=1.00xw:0.755xh;0,0.169xh&resize=640:*"
                        className="image"
                    />
                </div>

                {/* Text Section */}
                <div className="textContainer">
                    <div className="content">
                        <h2 className="title">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.
                        </h2>
                        <p className="paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam
                            odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.
                        </p>
                        <Link
                            to="#"
                            className="button"
                        >
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
