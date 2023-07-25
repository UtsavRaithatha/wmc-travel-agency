
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

const app = express();

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());
// app.use(cors({
//     origin: "http://localhost:3000",
//     methods: "GET,POST,PUT,DELETE",
//     credentials: true
// }));

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

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log("Server is running on port 5000");
})