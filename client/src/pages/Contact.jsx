import React from "react";
import "../assets/css/styles.css";

function Contact() {
  return (
    <div className="Contact d-flex align-items-center" style={{ minHeight: "80vh" }}>
      <div className="container text-center">
        <h3 className="harry my-4">Contact Us</h3>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <p>Email: contact@mysticalvoyages.com</p>
            <p>Phone: (123) 456-7890</p>
            <p>Address: 123 Main Street, City, Country</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
