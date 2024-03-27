const mongoose = require("mongoose");

// uri =
//   "mongodb+srv://Meet:Meetkumar07@clustermeet.8agpadt.mongodb.net/ClusterMeet?retryWrites=true&w=majority&appName=ClusterMeet";

const connectDB = (uri) => {
    console.log("connect db...");
  return mongoose.connect(uri, 
//     {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }
  );
};


module.exports = connectDB;