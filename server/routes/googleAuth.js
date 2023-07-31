
const passport = require("passport");
const router = require("express").Router();

const CLIENT_URL = "http://localhost:3000";

router.get("/auth/google",
  passport.authenticate("google", { scope: ["profile"] })
);

router.get("/auth/google/callback", 
  passport.authenticate("google", { failureRedirect: "/login/failed" }),
  function(req, res) {
    res.redirect(CLIENT_URL);
});

// router.get("/api/auth/check", function (req, res) {
//     if (req.isAuthenticated()) {
//         res.status(200).json({isLoggedIn: true, user: req.user});
//     }
//     else {
//         res.status(200).json({isLoggedIn: false});
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

module.exports = router;