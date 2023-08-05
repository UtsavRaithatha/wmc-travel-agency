import React from 'react'

export default function FAQ() {
    return (
        <div className="FAQ d-flex align-items-center" style={{ minHeight: "80vh" }}>
            <div className="container text-center my-5">
                <h3 className="harry my-3">Frequently Asked Questions</h3>
                <div className="accordion" id="faqAccordion">
                    <div className="accordion-item">
                        <h4 className="accordion-header" id="faqHeading1">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#faqCollapse1"
                                aria-expanded="false"
                                aria-controls="faqCollapse1"
                            >
                                1. What destinations do you offer?
                            </button>
                        </h4>
                        <div
                            id="faqCollapse1"
                            className="accordion-collapse collapse"
                            aria-labelledby="faqHeading1"
                            data-bs-parent="#faqAccordion"
                        >
                            <div className="accordion-body">
                                Mystical Voyages offers a wide range of destinations, including famous wizarding locations such as Hogwarts, Diagon Alley, Hogsmeade, and many more magical places around the world.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h4 className="accordion-header" id="faqHeading2">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#faqCollapse2"
                                aria-expanded="false"
                                aria-controls="faqCollapse2"
                            >
                                2. How can I book a travel package?
                            </button>
                        </h4>
                        <div
                            id="faqCollapse2"
                            className="accordion-collapse collapse"
                            aria-labelledby="faqHeading2"
                            data-bs-parent="#faqAccordion"
                        >
                            <div className="accordion-body">
                                Booking a travel package is easy. Simply visit our website, browse through the available packages, select your desired destination, and follow the instructions to complete your booking.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
