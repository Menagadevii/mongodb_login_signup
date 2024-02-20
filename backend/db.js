const mongoose = require("mongoose");

module.exports = async () => {
    const connectionParms ={
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    try {
        await mongoose.connect("mongodb://localhost:27017", connectionParms);
        console.log("Connected to database successfully");
    } catch(error) {
        console.error(error);
        console.log("Could not connect to the database");
    }
};
