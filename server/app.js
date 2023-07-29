
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const connection = require("./config/database");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const passportSetup = require("./config/passport");
const googleAuth = require("./routes/googleAuth");
const exploreRoute = require("./routes/explore");
const explorePackagesRoute = require("./routes/explorePackages");
const addTravelPackageRoute = require("./routes/addTravelPackage");

const app = express();

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

app.use(session({
    secret: "This is the secret",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session()); 

// routes 
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/", googleAuth);
app.use("/", exploreRoute);
app.use("/", explorePackagesRoute);
app.use("/", addTravelPackageRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log("Server is running on port 5000");
})