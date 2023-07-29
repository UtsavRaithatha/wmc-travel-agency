
const router = require("express").Router();
const TravelPackage = require("../models/travelPackage");

router.get("/api/explore/:key", async (req, res) => {
    try {
        const key = parseInt(req.params.key);
        const travelPackage = await TravelPackage.findOne({ key: key });

        if (!travelPackage) {
            return res.status(404).json({ message: "Travel Package not found" });
        }

        return res.json(travelPackage);
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

module.exports = router;