
const passport = require("passport");
const router = require("express").Router();
const User = require("../models/user");

router.get("/auth/google",
    passport.authenticate("google", { scope: ["profile"] })
);

router.get("/auth/google/home",
    passport.authenticate("google", { failureRedirect: "/login" }),
    function (req, res) {
        res.redirect("/home");
    }
);

router.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
});

router.post("/register", async function (req, res) {
    try {   
        console.log(req.body);
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