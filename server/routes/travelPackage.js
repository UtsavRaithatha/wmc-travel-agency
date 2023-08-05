
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

router.get("/explore/:key", async (req, res) => {
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

router.post("/add-travel-package", async (req, res) => {
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

router.put("/edit-travel-package/:key", async (req, res) => {
  try {
    const key = parseInt(req.params.key);

    const existingTravelPackage = await TravelPackage.findOne({key: key});

    if (!existingTravelPackage) {
      return res.status(404).json({ message: 'Travel package not found' });
    }
    existingTravelPackage.name = req.body.name;
    existingTravelPackage.duration = req.body.duration;
    existingTravelPackage.price = req.body.price;
    existingTravelPackage.itinerary = req.body.itinerary;
    existingTravelPackage.img = req.body.img;
    existingTravelPackage.dates = req.body.dates;

    await existingTravelPackage.save();

    res.json(existingTravelPackage);

  } catch (error) {
    console.error('Error updating travel package:', error);
    res.status(500).json({ message: 'Error updating travel package' });
  }
});

router.delete("/delete-package/:id", async (req, res) => {
    try {
      const packageKey = parseInt(req.params.id);
      const deletedPackage = await TravelPackage.findOneAndDelete({ key: packageKey });
      if (!deletedPackage) {
        return res.status(404).json({ message: "Package not found" });
      }
      res.status(200).json({ message: "Package deleted successfully" });
    } catch (error) {
      console.log("Error while deleting package:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  
module.exports = router;