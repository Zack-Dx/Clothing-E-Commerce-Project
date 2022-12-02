import mongoose from "mongoose";
async function dbConnection() {
  try {
    await mongoose.connect("mongodb://localhost:27017/ecommerce");
    console.log("Database Connected...");
  } catch (error) {
    console.log("Failed to connect the database!");
  }
}

export { dbConnection };
