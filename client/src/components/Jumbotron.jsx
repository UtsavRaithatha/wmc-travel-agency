import React from "react";
import "../assets/css/styles.css";

export default function Jumbotron() {
    return (
        <div className="Jumbotron">
            <section className="jumbotron text-center">
                <div className="container my-5">
                    <h2 className="jumbotron-heading py-3">Welcome to Mystical Voyages!</h2>
                    <p className="lead text-muted py-5 jumbotron-details">
                    Step into a world of wonder with Mystical Voyages - Where broomstick rides and portkey trips await to whisk you away to mesmerizing realms.</p>
                </div>
            </section>
        </div>
    )
}