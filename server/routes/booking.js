
const Booking = require("../models/booking");
const router = require("express").Router();

router.post("/", async (req, res) => {
    try {
        const { userId, travelPackageId, persons, selectedDate } = req.body;

        const newBooking = new Booking({
          user: userId,
          travelPackage: travelPackageId,
          persons,
          selectedDate,
        });
    
        await newBooking.save();
        res.status(201).json({ message: "Booking created successfully", data: newBooking });
        
      } catch (error) {
        res.status(500).json({ message: "An error occurred", error });
      }
});

module.exports = router;