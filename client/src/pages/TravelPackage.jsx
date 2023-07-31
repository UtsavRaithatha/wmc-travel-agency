import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import Navbar from "../components/Navbar";
import Itinerary from "../components/Itinerary";
import "../assets/css/styles.css";

const TravelPackage = () => {

  const { key } = useParams();
  const [travelPackage, setTravelPackage] = useState({});
  const [isError, setIsError] = useState("");

  useEffect(() => {
    const fetchTravelPackage = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/explore/${key}`);
        setTravelPackage(response.data);
      } catch (error) {
        if (error.response.status === 404) {
          setIsError(error.response.data.message);
        }
        else if (error.response.status === 500) {
          setIsError(error.response.data.message);
        }
      }
    };

    fetchTravelPackage();
  }, [key]);

  return (

    <div className="TravelPackage">
      <Navbar />
      {isError && <p className="error">{isError}</p>}

      {Object.keys(travelPackage).length > 0 && (
        <div>
          <Carousel imgData={travelPackage.img} />

          <div className="container mt-5 pb-5">
            <div className="jumbotron">
              <h2 className="display-4 text-center">{travelPackage.name}</h2>
              <p className="lead text-center">Duration: {travelPackage.duration}</p>
              <p className="text-center">Price: {travelPackage.price}</p>
            </div>

            <div className="container mt-5">
              <h3 className="mb-4 d-flex justify-content-center">Itinerary</h3>
              <div className="itinerary-container">
                {travelPackage.itinerary.map((info, index) => (
                  <Itinerary key={index} day={`${String(index + 1).padStart(2, "0")}`} details={info} />
                ))}
              </div>
            </div>
          </div>
          </div>
      )}
    </div>
  );
};

export default TravelPackage;
