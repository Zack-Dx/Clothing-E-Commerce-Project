import mongoose from "mongoose";
import dotenv from "dotenv"
async function dbConnection() {
  try {
    await mongoose.connect(process.env.MONGO_CONNECTION_URL);
    console.log("Database Connected...");
  } catch (error) {
    console.log("Failed to connect the database!");
  }
}

export { dbConnection };
