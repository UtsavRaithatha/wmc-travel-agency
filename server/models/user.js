const mongoose = require("mongoose");
const findOrCreate = require("mongoose-findorcreate");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    googleId: String,
    picture: String,
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    }
});

userSchema.methods.generateAuthToken = function() {
    const userDetails = this.toObject();
    delete userDetails.password;
    const token = jwt.sign({user: userDetails}, process.env.JWTPRIVATEKEY, {expiresIn: "7d"});
    return token;
}

userSchema.plugin(findOrCreate);

const User = new mongoose.model("User", userSchema);

const validate = (data) => {
    const schema = Joi.object({
        firstName: Joi.string().required().label("First Name"),
        lastName: Joi.string().required().label("Last Name"),
        email: Joi.string().email().required().label("Email"),
        password: passwordComplexity().required().label("Password")
    });

    return schema.validate(data);
};

module.exports = {User, validate};
