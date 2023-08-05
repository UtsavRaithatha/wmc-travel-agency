
const Booking = require("../models/booking");
const router = require("express").Router();

router.post("/bookings", async (req, res) => {
    try {
        const { userId, travelPackageId, persons, selectedDate } = req.body;

        const newBooking = new Booking({
          userId: userId,
          travelPackageId: travelPackageId,
          persons,
          selectedDate,
        });
    
        await newBooking.save();
        res.status(201).json({ message: "Booking created successfully", data: newBooking });
        
      } catch (error) {
        res.status(500).json({ message: "An error occurred", error });
      }
});

router.get("/view-bookings", async (req, res) => {
  try {
    const bookings = await Booking.find().populate("travelPackageId");
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;