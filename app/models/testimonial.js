import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
});

const Testimonials = mongoose.model("testimonials", testimonialSchema);

export { Testimonials };
