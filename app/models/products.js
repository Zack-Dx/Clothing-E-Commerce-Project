import mongoose from "mongoose";

const productsSchema = mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  size: { type: String, required: true },
});

const Tees = mongoose.model("tshirt", productsSchema);
const Hoodies = mongoose.model('hoodie', productsSchema)
export { Tees,Hoodies };
