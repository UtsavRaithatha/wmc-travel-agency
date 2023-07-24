
const passport = require("passport");
const router = require("express").Router();
const User = require("../models/user");

const CLIENT_URL = "http://localhost:3000/";

router.get("/auth/google",
    passport.authenticate("google", { scope: ["profile"] })
);

router.get("/auth/google/callback",
    passport.authenticate("google", {
        successRedirect: CLIENT_URL,
        failureRedirect: "/login/failed"
    })
);

router.get("/api/auth/check", function (req, res) {
    if (req.isAuthenticated()) {
        res.status(200).json({isLoggedIn: true, user: req.user});
    }
    else {
        res.status(200).json({isLoggedIn: false});
    }
})

// router.get("/login/success", function (req, res) {
//     if (req.user) {
//         res.status(200).json({
//             success: true,
//             message: "successful",
//             user: req.user
//         });
//     }
// });

router.get("/login/failed", function (req, res) {
    res.status(401).json({
        success: false,
        message: "failure"
    });
})

router.get("/logout", function (req, res) {
    req.logout();
    res.redirect(CLIENT_URL);
});

router.post("/register", async function (req, res) {
    try {   
        const existingUser = await User.findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(409).json({ message: "User already exists" });
        }

        await User.register(
            {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
            },
            req.body.password
        );

        passport.authenticate("local")(req, res, function () {
            res.status(200).json({ message: "Registration successful" });
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

router.post("/login", async function (req, res) {
    const user = new User({
        email: req.body.email,
        password: req.body.password
    });

    await req.login(user, async function (err) {
        try {
            if (err) {
                console.error(err);
                return res.status(401).json({ message: "Incorrect email or password" });
            }

            await passport.authenticate("local")(req, res, function () {
                res.status(200).json({ message: "Login Successful" });
            });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ message: "Internal Server Error" });
        }
    });
});


module.exports = router;