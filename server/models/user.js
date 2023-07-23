const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const findOrCreate = require("mongoose-findorcreate");

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    googleId: String
});

userSchema.plugin(passportLocalMongoose, { usernameField: "email" });
// userSchema.plugin(passportLocalMongoose);

userSchema.plugin(findOrCreate);

const User = mongoose.model("User", userSchema);

module.exports = User;
