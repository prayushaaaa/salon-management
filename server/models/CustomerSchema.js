import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  phone: { type: Number },
  photo: { type: String },
  role: {
    type: String,
    enum: ["customer", "employee"],
    default: "customer",
  },
  points: { type: Number },
  gender: { type: String, enum: ["male", "female", "other"] },
  //   bloodType: { type: String },
  appointments: [{ type: mongoose.Types.ObjectId, ref: "Appointment" }],
});

export default mongoose.model("Customer", CustomerSchema);