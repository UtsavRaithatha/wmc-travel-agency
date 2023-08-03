import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import axios from "axios";
import "../assets/css/styles.css";

function Explore() {

    const [travelPackage, setTravelPackage] = useState([]);
    const [isError, setIsError] = useState("");

    useEffect(() => {
        const fetchTravelPackage = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/explore`);
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
    }, []);

    return (
        <div className="Explore">
            {isError && <p className="error">{isError}</p>}

            {Object.keys(travelPackage).length > 0 && (
                <div className="album py-5">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">

                            {travelPackage.map((item, index) => (
                                <Card
                                    key={item.key}
                                    imgsrc={item.img[0].link}
                                    imgalt={item.img[0].altText}
                                    name={item.name}
                                    price={item.price}
                                    duration={item.duration}
                                    id={item.key}
                                />
                            ))}

                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Explore;