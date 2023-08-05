import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import Itinerary from "../components/Itinerary";
import "../assets/css/styles.css";

const TravelPackage = ({ userid }) => {

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

  const getDayName = (dayIndex) => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[dayIndex];
  };

  const getMonthName = (month) => {
    const monthNames = [
      "January", "February", "March", "April", "May", "June", "July",
      "August", "September", "October", "November", "December"
    ];
    return monthNames[month];
  }

  return (

    <div className="TravelPackage">
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
              <h3 className="mb-4 d-flex justify-content-center">Departure Options Available</h3>
              <div className="dates-container">
                {travelPackage.dates.map((date, index) => {
                  const onlyDate = new Date(date);
                  const displayDate = getDayName(onlyDate.getDay()) + ", " + onlyDate.getDate() + " " + getMonthName(onlyDate.getMonth()) + " " + onlyDate.getFullYear();
                  return <p key={index} className="text-center">{displayDate}</p>;
                })}
              </div>

              <div className="text-center">
                <Link to={`/booking/${userid}/${travelPackage.key}`} className=" my-4 btn btn-lg btn-success">
                  Book Now
                </Link>
              </div>
            </div>

            <div className="container mt-3">
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
