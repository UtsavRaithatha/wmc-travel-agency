import React from 'react'
import "../assets/css/styles.css";

export default function Itinerary(props) {
  return (
    <div className="itinerary-item py-2">
        <div className="day-number px-4">Day<br />{props.day}</div>
        <div className="details py-4 px-2">
          {props.details}
        </div>
      </div>
  );
}
