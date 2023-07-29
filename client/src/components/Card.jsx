import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/styles.css";

export default function Card(props) {
    return (
        <div className="Card col">
            <div className="card shadow-sm bg-body-secondary">
                <img src={props.imgsrc} alt={props.imgalt}/>
                <div className="card-body">
                    <h3 className="card-text my-4">{props.name}</h3>
                    <p className="card-text my-3">Price: {props.price}</p>
                    <p className="card-text my-3">Duration: {props.duration} </p>
                    <div className="d-flex justify-content-center align-items-center my-4">
                        <div className="btn-group">
                            <Link type="button" className="btn btn-lg btn-secondary" to={`/api/explore/${props.id}`}>View</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
