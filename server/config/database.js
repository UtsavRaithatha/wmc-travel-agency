const mongoose = require("mongoose");

const databaseUrl = "mongodb+srv://raithathautsav11:travelagency@database.ql9szli.mongodb.net/travel-agency?retryWrites=true&w=majority";

// const databaseUrl = "mongodb://127.0.0.1:27017/userDB";

mongoose.connect(databaseUrl, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB successfully!");
});

module.exports = db;   