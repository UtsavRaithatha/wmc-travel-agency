import React, { useState } from "react";
import "../assets/css/styles.css";
import axios from "axios";

const AddTravelPackage = () => {
    const [formData, setFormData] = useState({
        name: "",
        duration: "",
        price: "",
        itinerary: [""],
        img: [{ link: "", altText: "" }],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleArrayChange = (index, e, field) => {
        const { value } = e.target;
        setFormData((prevData) => {
            const updatedArray = [...prevData[field]];
            updatedArray[index] = value;
            return {
                ...prevData,
                [field]: updatedArray,
            };
        });
    };

    const handleAddItem = (field) => {
        setFormData((prevData) => ({
            ...prevData,
            [field]: [...prevData[field], ""],
        }));
    };

    const handleRemoveItem = (index, field) => {
        setFormData((prevData) => {
            const updatedArray = prevData[field].filter((item, i) => i !== index);
            return {
                ...prevData,
                [field]: updatedArray,
            };
        });
    };

    const handleImageChange = (index, e) => {
        const { name, value } = e.target;
        setFormData((prevData) => {
            const updatedImg = [...prevData.img];
            updatedImg[index] = { ...updatedImg[index], [name]: value };
            return {
                ...prevData,
                img: updatedImg,
            };
        });
    };

    const handleRemoveImage = (index) => {
        setFormData((prevData) => {
            const updatedImg = prevData.img.filter((item, i) => i !== index);
            return {
                ...prevData,
                img: updatedImg,
            };
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate the form data
        if (
            formData.name === "" ||
            formData.duration === "" ||
            formData.price === "" ||
            formData.itinerary.length === 0 ||
            formData.img.length === 0
        ) {
            alert("Please fill in all required fields and add at least one image and one itinerary item.");
            return;
        }

        try {
            const response = await axios.post("http://localhost:5000/api/add-travel-package", formData);

            setFormData({
                name: "",
                duration: "",
                price: "",
                itinerary: [""],
                img: [{ link: "", altText: "" }],
            });

            alert("Travel Package added successfully");

            

        } catch (error) {
            console.log("Error: ", error);
        }

    };

    return (
        <div className="container mt-5">
            <h2>Add a Travel Package</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="duration">Duration</label>
                    <input
                        type="text"
                        className="form-control"
                        id="duration"
                        name="duration"
                        value={formData.duration}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input
                        type="text"
                        className="form-control"
                        id="price"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <div className="form-group">
                        <label>Itinerary</label>
                        {formData.itinerary.map((item, index) => (
                            <div key={index} className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">Day {index + 1}</span>
                                </div>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={item}
                                    onChange={(e) => handleArrayChange(index, e, "itinerary")}
                                    required
                                />
                                {index > 0 && (
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={() => handleRemoveItem(index, "itinerary")}
                                    >
                                        Remove
                                    </button>
                                )}
                            </div>
                        ))}
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={() => handleAddItem("itinerary")}
                        >
                            Add a Day
                        </button>
                    </div>
                </div>
                <div>
                    <div className="form-group">
                        <label>Images</label>
                        {formData.img.map((image, index) => (
                            <div key={index}>
                                <div className="form-group">
                                    <label>Image {index + 1} Link</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="link"
                                        value={image.link}
                                        onChange={(e) => handleImageChange(index, e)}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Image {index + 1} Alt Text</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="altText"
                                        value={image.altText}
                                        onChange={(e) => handleImageChange(index, e)}
                                        required
                                    />
                                </div>
                                {index > 0 && (
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={() => handleRemoveImage(index)}
                                    >
                                        Remove Image
                                    </button>
                                )}
                            </div>
                        ))}
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={() => handleAddItem("img")}
                        >
                            Add an Image
                        </button>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary mt-3">Submit</button>
            </form>
        </div>
    );
};

export default AddTravelPackage;
