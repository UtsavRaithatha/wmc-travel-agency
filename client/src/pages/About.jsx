import React from "react";
import "../assets/css/styles.css";

function About() {
    return (
        <div className="About d-flex align-items-center" style={{ minHeight: "80vh" }}>
            <div className="container text-center">
                <h3 className="harry my-4">About Us</h3>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <p>
                            Mystical Voyages - Where Imagination Takes Flight. Unleash the magic within as we transport you to fantastical realms. Experience the wonders of enchanted destinations with our expertly crafted journeys. Let your dreams soar with Mystical Voyages - Your gateway to extraordinary adventures.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;