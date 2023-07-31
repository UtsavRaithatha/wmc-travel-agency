import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditTravelPackage = () => {
    const navigate = useNavigate();
    const { key } = useParams();
    const [formData, setFormData] = useState({
        name: "",
        duration: "",
        price: "",
        itinerary: [""],
        img: [{ link: "", altText: "" }],
    });

    useEffect(() => {
        const fetchTravelPackage = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/explore/${key}`);
                setFormData(response.data);
            } catch (error) {
                console.log("Error fetching travel package: ", error);
            }
        };
        fetchTravelPackage();
    }, [key]);

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
            await axios.put(`http://localhost:5000/api/edit-travel-package/${key}`, formData);

            alert("Travel Package edited successfully");
            navigate(`/api/explore/${key}`);
        } catch (error) {
            console.log("Error: ", error);
        }
    };

    return (
        <div className="TravelPackageForm">
            <div className="container mt-5">
            <h3 className="harry d-flex justify-content-center py-3">{formData.name}</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group row mb-3">
                        <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
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
                    </div>
                    <div className="form-group row mb-3">
                        <label htmlFor="duration" className="col-sm-2 col-form-label">Duration</label>
                        <div className="col-sm-10">
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
                    </div>
                    <div className="form-group row mb-3">
                        <label htmlFor="price" className="col-sm-2 col-form-label">Price</label>
                        <div className="col-sm-10">
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
                    </div>
                    <div>
                        <div className="form-group mb-3">
                            <label className="mb-3">Itinerary Details</label>
                            {formData.itinerary.map((item, index) => (
                                <div key={index} className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text day-no">Day {index + 1}</span>
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
                            <div className="d-flex justify-content-center">
                                <button
                                    type="button"
                                    className="btn btn-secondary mt-3"
                                    onClick={() => handleAddItem("itinerary")}
                                >
                                    Add a Day
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="form-group mb-3">
                            <label className="mb-3">Images</label>
                            {formData.img.map((image, index) => (
                                <div key={index}>
                                    <div className="form-group mb-3">
                                        <label className="mb-3">Image {index + 1} Link</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="link"
                                            value={image.link}
                                            onChange={(e) => handleImageChange(index, e)}
                                            required
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label className="mb-3">Image {index + 1} Alt Text</label>
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
                                            className="btn btn-danger mb-3"
                                            onClick={() => handleRemoveImage(index)}
                                        >
                                            Remove Image
                                        </button>
                                    )}
                                </div>
                            ))}

                            <div className="d-flex justify-content-center">

                                <button
                                    type="button"
                                    className="btn btn-secondary mt-3"
                                    onClick={() => handleAddItem("img")}
                                >
                                    Add an Image
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center"><button type="submit" className="btn btn-primary mt-3 package-btn mb-5">Save Changes</button></div>
                </form>
            </div>
        </div>
    );
};

export default EditTravelPackage;
