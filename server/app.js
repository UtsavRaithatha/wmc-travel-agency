
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
const travelPackageRoutes = require("./routes/travelPackage");
const bookingRoutes = require("./routes/booking");

const app = express();

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: "GET,POST,PUT,DELETE",
    credentials: true
}));

app.set("trust proxy", 1);

app.use(session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {
        sameSite: "none",
        secure: true,
        maxAge: 7 * 24 * 60 * 60 * 1000
    }
}));

app.use(passport.initialize());
app.use(passport.session());

// routes 
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/", googleAuth);
app.use("/api", travelPackageRoutes);
app.use("/api", bookingRoutes);

// Port
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})