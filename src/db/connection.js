const mongoose = require("mongoose");

//DB connection (Data Base)
const connection = async () => {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB is working");
};

//Original - Standard Function
// connection();


module.exports = connection;