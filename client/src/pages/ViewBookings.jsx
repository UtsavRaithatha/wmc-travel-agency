import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewBookings = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/view-bookings");
                setBookings(response.data);
            } catch (error) {
                console.log("Error while fetching bookings:", error);
            }
        };
        fetchBookings();
    }, []);

    const calculateTotalPrice = (booking) => {
        const pricePerPerson = parseFloat(booking.travelPackageId.price.replace(/[^\d.-]/g, ''));
        const numberOfPersons = booking.persons.length;
        const totalPrice = pricePerPerson * numberOfPersons;
        return totalPrice;
      };

    return (
        <div className="ViewBookings">
        {bookings && (
        <div className="container">
                <h3 className="harry my-4 text-center">Bookings</h3>
                <div className="d-flex flex-column booking-card">
                    {bookings.map((booking) => (
                        <div key={booking._id} className="p-4 border rounded">
                            <h4 className="my-4">Travel Package Name: {booking.travelPackageId.name}</h4>
                            <p className="my-4">Travel Package Date: {new Date(booking.selectedDate).toLocaleDateString()}</p>
                            <p className="my-4">No. of Persons: {booking.persons.length}</p>
                            <p className="my-4">Total Earnings: ${calculateTotalPrice(booking)}</p>
                        </div>
                    ))}
                </div>
            </div>)}
        </div>
    );
};

export default ViewBookings;
