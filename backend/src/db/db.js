const mongoose = require('mongoose');



function connectDB(){
    const uri = process.env.MONGODB_URI
    mongoose.connect(uri)
        .then(() => {
            console.log("MongoDB connected");
        })
        .catch((err) =>{
            console.log("MongoDB connection error: ", err);
        })
}


module.exports = connectDB;