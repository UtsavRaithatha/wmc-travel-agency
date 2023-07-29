
const router = require("express").Router();
const TravelPackage = require("../models/travelPackage");

router.post("/api/add-travel-package", async (req, res) => {
    try {
        const totalPackages = await TravelPackage.countDocuments();

        const newPackage = new TravelPackage({
            ...req.body,
            key: totalPackages + 1
        });

        const savedPackage = await newPackage.save();

        res.status(201).json(savedPackage);
        
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

module.exports = router;