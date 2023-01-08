import mongoose from "mongoose";

const contactchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

const Contact = mongoose.model("contact", contactchema);

export { Contact };
