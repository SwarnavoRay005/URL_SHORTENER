import mongoose from "mongoose";

const connectDB = async (req, res) => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`);
    console.log("Database connected successfully");
  } catch (error) {
    console.log("error connecting to database:", error.message);
  }
};

export default connectDB;
