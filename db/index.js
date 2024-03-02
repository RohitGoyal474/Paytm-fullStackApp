import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log("DB is connected");
  } catch (err) {
    console.error("DB is not connected, failed", err);
    process.exit(1);
  }
};

export default connectDB;