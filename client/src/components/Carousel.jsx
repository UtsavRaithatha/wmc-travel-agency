import React, { useState, useEffect } from "react";
import "../assets/css/styles.css";

export default function Carousel(props) {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((activeSlide) => (activeSlide + 1) % props.imgData.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [props.imgData.length]);

  if (props.imgData.length === 0) return null;

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
              className={index === activeSlide ? "active" : ""}
              aria-current={index === activeSlide}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {props.imgData.map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${index === activeSlide ? "active" : ""}`}
            >
              <div className="carousel-img-container">
                <div className="carousel-img-overlay"></div>
                <img src={image.link} className="w-100 c-img" alt={image.altText} />
                <div className="carousel-caption">
                  <h3 className="carousel-h"> {image.altText} </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
