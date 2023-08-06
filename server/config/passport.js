const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
const { User } = require("../models/user");
const BACKEND_URL = process.env.BACKEND_URL;

passport.serializeUser(function (user, cb) {
    process.nextTick(function () {
        return cb(null, user);
    });
});

passport.deserializeUser(function (user, cb) {
    process.nextTick(function () {
        return cb(null, user);
    });
});

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: `${BACKEND_URL}/auth/google/callback`,
    userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
},
    async function (accessToken, refreshToken, profile, cb) {
        try {
            const { given_name, family_name, email, sub, picture } = profile._json;

            const user = await User.findOrCreate({ googleId: sub }, {
                firstName: given_name,
                lastName: family_name,
                email: email,
                googleId: sub,
                picture: picture
            })

            return cb(null, user);
        } catch (err) {
            return cb(err);
        }
    }
));