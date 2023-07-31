
const passport = require("passport");
const router = require("express").Router();

const CLIENT_URL = "http://localhost:3000";

router.get("/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
);

// router.get("/auth/google/callback",
//     passport.authenticate("google", {
//         successRedirect: CLIENT_URL,
//         failureRedirect: "/login/failed"
//     })
// );
router.get("/auth/google/callback",
  function (req, res, next) {
    console.log("Callback route reached");
    next();
  },
  async function (req, res) {
    try {
      await passport.authenticate("google", function (err, user, info) {
        if (err) {
          console.error("Authentication error:", err);
          return res.status(500).json({ success: false, message: "Internal Server Error" });
        }
        if (!user) {
          return res.status(401).json({ success: false, message: "Authentication failed" });
        }
        // Authentication successful
        return res.redirect(CLIENT_URL);
      })(req, res);
    } catch (err) {
      console.error("Unexpected error occurred:", err);
      return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
  }
);


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