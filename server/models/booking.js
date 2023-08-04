const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    travelPackage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "TravelPackage",
        required: true,
    },
    persons: [
        {
            name: { type: String, required: true },
            age: { type: Number, required: true },
            gender: { type: String, enum: ["male", "female", "other"], required: true },
        },
    ],
    selectedDate: { type: Date, required: true },
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;