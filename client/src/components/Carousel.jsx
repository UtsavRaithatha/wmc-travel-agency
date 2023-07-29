import React from "react";
import "../assets/css/styles.css";

export default function Carousel(props) {

  if (props.imgData.length === 0)
    return null;

  return (
    <div className="Carousel">
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          {props.imgData.map((image, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {props.imgData.map((image, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
              <img src={image.link} className="w-100 c-img" alt={image.altText} />
              <div className="container">
                <div className="carousel-caption text-center">
                  <h3 className="carousel-h"> {image.altText} </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}