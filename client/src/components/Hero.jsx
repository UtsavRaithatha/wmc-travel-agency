import React from "react"
import { Link } from "react-router-dom";
import "../assets/css/styles.css";

export default function Hero(props) {
    return (
        <div className="Hero">
            <div className="container col-xxl-8 px-1 py-5">
                <div className="row flex-lg-row-reverse justify-content-center align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6 image-container">
                        <img src={props.imgsrc} className="d-block mx-lg-auto img-fluid hero-img" alt={props.altText} />
                    </div>
                    <div className="col-lg-6">
                        <h2 className="display-5 fw-bold text-body-emphasis lh-1 mb-3 px-3 hero-heading">{props.heading}</h2>
                        <p className="lead hero-para px-3">{props.content}</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-center mt-5">
                            <Link type="button" className="btn btn-outline-secondary btn-lg px-4" to={props.id}> Explore </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
