const mongoose = require("mongoose");


const connectDB = async (uri) => {
    console.log("Connecting to database...");
    try {
        await mongoose.connect(uri);
        console.log("Connected to database successfully.");
    } catch (error) {
        console.error("Error connecting to the database:", error);
    }
};

module.exports = connectDB;






