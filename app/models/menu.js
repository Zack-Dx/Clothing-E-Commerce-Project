import mongoose from "mongoose";

const tshirtsSchema = mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  size: { type: String, required: true },
});

const Tees = mongoose.model("tshirt", tshirtsSchema);

export { Tees };
