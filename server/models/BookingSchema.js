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
    employee: {
      type: mongoose.Types.ObjectId,
      ref: "Employee",
      required: true,
    },
    price: { type: String, required: true },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true
    },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
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
