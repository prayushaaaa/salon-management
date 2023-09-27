import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    service: {
      type: mongoose.Types.ObjectId,
      ref: "Service",
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "Customer",
    },
    reviewText: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Review", reviewSchema);