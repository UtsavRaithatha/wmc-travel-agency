import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../assets/css/styles.css";

export default function Card(props) {

    const navigate = useNavigate();
    const handleDelete = async () => {
        if (window.confirm("Are you sure you want to delete this package?")) {
            await axios.delete(`http://localhost:5000/api/delete-package/${props.id}`);
            navigate("/api/explore");
        }
    };

    return (
        <div className="Card col">
            <div className="card shadow-sm bg-body-secondary">
                <img src={props.imgsrc} alt={props.imgalt} />
                <div className="card-body">
                    <h3 className="card-text my-4">{props.name}</h3>
                    <p className="card-text my-3">Price: {props.price}</p>
                    <p className="card-text my-3">Duration: {props.duration} </p>
                    <div className="d-flex justify-content-center align-items-center my-4">
                        <div className="btn-group">
                            <Link type="button" className="btn btn-secondary" to={`/api/explore/${props.id}`}>View</Link>
                            {props.isAdmin && <Link type="button" className="btn btn-primary" to={`/api/edit-travel-package/${props.id}`}>Edit</Link>}
                            {props.isAdmin && <button
                                type="button"
                                className="btn btn-danger"
                                onClick={handleDelete}
                            >
                                Delete
                            </button>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
