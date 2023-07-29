
const router = require("express").Router();
const TravelPackage = require("../models/travelPackage");

router.get("/explore", async (req, res) => {
    try {
        const travelPackageArray = await TravelPackage.find({});

        if (!travelPackageArray) {
            return res.status(404).json({ message: "Travel Packages not found" });
        }

        return res.json(travelPackageArray);
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

module.exports = router;