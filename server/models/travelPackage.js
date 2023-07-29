const mongoose = require("mongoose");

const TravelPackageSchema = new mongoose.Schema({
    key: { type: Number, required: true },
    name: { type: String, required: true },
    duration: { type: String, required: true },
    price: { type: String, required: true },
    itinerary: { type: [String], required: true },
    img: { type: [{ link: String, altText: String }], required: true },
});

const TravelPackage = mongoose.model("TravelPackage", TravelPackageSchema);

module.exports = TravelPackage;