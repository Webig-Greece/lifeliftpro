const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Could not connect to MongoDB", error);
    process.exit(1);
  }
}

module.exports = connectDB;

async function closeDB() {
  try {
    mongoose.connection.close();
  } catch (error) {
    console.error("Could not close MongoDB connection", error);
  }
}

function getDB() {
  if (mongoose) {
    return mongoose;
  }
  throw "No database found!";
}

module.exports = {
  connectDB,
  closeDB,
  getDB,
};
