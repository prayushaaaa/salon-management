import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    service: {
      type: mongoose.Types.ObjectId,
      ref: "Service",
      required: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "Customer",
      required: true,
    },
    price: { type: String, required: true },
    date: {
      type: Date,
      required: true,
    },
    time: {
      type: String,
      required: true
    },
    status: {
      type: String,
      enum: ["pending", "approved", "cancelled"],
      default: "pending",
    },
    isPaid: {
      type: Boolean,
      default: false,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);
