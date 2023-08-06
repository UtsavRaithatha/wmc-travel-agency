import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import BACKEND_URL from "../config";

const Booking = () => {
    const navigate = useNavigate();
    const { userid, key } = useParams();
    const [totalCost, setTotalCost] = useState(0);

    const [travelPackage, setTravelPackage] = useState(null);

    useEffect(() => {
        const fetchTravelPackageData = async () => {
            try {
                const response = await axios.get(`${BACKEND_URL}/api/explore/${key}`);
                setTravelPackage(response.data);
            } catch (error) {
                console.error("Error fetching travel package data:", error);
            }
        };

        fetchTravelPackageData();
    }, [key]);

    const [bookingDetails, setBookingDetails] = useState({
        persons: [{ name: "", age: "", gender: "" }],
        selectedDate: "",
    });

    useEffect(() => {
        const pricePerPerson = parseFloat(travelPackage?.price?.replace(/[^\d.-]/g, ''));
        const numberOfPersons = bookingDetails.persons.length;
        setTotalCost(pricePerPerson * numberOfPersons);
    }, [bookingDetails.persons, travelPackage]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setBookingDetails({
            ...bookingDetails,
            [name]: value,
        });
    };

    const handleAddPerson = () => {
        setBookingDetails({
            ...bookingDetails,
            persons: [...bookingDetails.persons, { name: "", age: "", gender: "" }],
        });
    };

    const handleRemovePerson = (index) => {
        if (bookingDetails.persons.length > 1) {
            const updatedPersons = [...bookingDetails.persons];
            updatedPersons.splice(index, 1);
            setBookingDetails({
                ...bookingDetails,
                persons: updatedPersons,
            });
        }
    };

    const handlePersonInputChange = (event, index) => {
        const { name, value } = event.target;
        const updatedPersons = [...bookingDetails.persons];
        updatedPersons[index][name] = value;
        setBookingDetails({
            ...bookingDetails,
            persons: updatedPersons,
        });
    };

    const handleSubmitBooking = async (event) => {
        event.preventDefault();

        try {
            const bookingData = {
                userId: userid,
                travelPackageId: travelPackage._id,
                persons: bookingDetails.persons,
                selectedDate: new Date(bookingDetails.selectedDate),
            };

            await axios.post(`${BACKEND_URL}/api/bookings`, bookingData);

            window.alert("Booking successfull!");
            navigate("/");

        } catch (error) {
            console.error("Error while booking:", error);
        }
    };

    return (
        <div className="Booking">
        {travelPackage && (
            <div className="container mt-5">
                <h3 className="mb-4 d-flex justify-content-center">{travelPackage.name}</h3>
                    <form onSubmit={handleSubmitBooking} className="text-center">
                        <div className="form-group my-4">
                            <label htmlFor="selectedDate">Select Date:</label>
                            <select
                                id="selectedDate"
                                name="selectedDate"
                                value={bookingDetails.selectedDate}
                                onChange={handleInputChange}
                                className="mx-4"
                                required
                            >
                                <option value="">Select Date</option>
                                {travelPackage.dates.map((date, index) => (
                                    <option key={index} value={date}>
                                        {new Date(date).toLocaleDateString()}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="form-group my-4">
                            <h4>Persons:</h4>
                            {bookingDetails.persons.map((person, index) => (
                                <div key={index} className="my-4">
                                    <label htmlFor={`personName${index}`} className="mx-3">Name:</label>
                                    <input
                                        type="text"
                                        id={`personName${index}`}
                                        name="name"
                                        value={person.name}
                                        onChange={(event) => handlePersonInputChange(event, index)}
                                        className="my-3"
                                        required
                                    />

                                    <br />

                                    <label htmlFor={`personAge${index}`} className="mx-3">Age:</label>
                                    <input
                                        type="number"
                                        id={`personAge${index}`}
                                        name="age"
                                        value={person.age}
                                        onChange={(event) => handlePersonInputChange(event, index)}
                                        className="my-3"
                                        min="0"
                                        required
                                    />

                                    <br />

                                    <label htmlFor={`personGender${index}`} className="mx-3">Gender:</label>
                                    <select
                                        id={`personGender${index}`}
                                        name="gender"
                                        value={person.gender}
                                        onChange={(event) => handlePersonInputChange(event, index)}
                                        className="my-3"
                                        required
                                    >
                                        <option value="">Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>

                                    {bookingDetails.persons.length > 1 && (
                                        <div className="my-4">
                                            <button type="button" onClick={() => handleRemovePerson(index)} className="mx-4 btn btn-danger">
                                                Remove Person
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="my-4 d-flex justify-content-center">
                            <button type="button" onClick={handleAddPerson} className="btn btn-success">
                                Add a Person
                            </button>
                        </div>

                        <div className="my-4">
                            <p>Total Price: ${totalCost}</p>
                        </div>

                        <div className="d-flex justify-content-center">
                            <button type="submit" className="btn btn-success">Submit Booking</button>
                        </div>
                    </form>
            </div>
            )}
        </div>
    );
};

export default Booking;
