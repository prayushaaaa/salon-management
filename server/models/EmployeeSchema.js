import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  phone: { type: Number },
  photo: { type: String },
  role: { type: String, required: true },
  specialization: { type: String, required: true },
  category: { type: String }, // Add the 'category' field here

  timeSlots: { type: Array },

  isApproved: {
    type: String,
    required: true,
    enum: ["pending", "approved", "cancelled"],
    default: "pending",
  },

  appointments: [{ type: mongoose.Types.ObjectId, ref: "Appointment" }],
});

export default mongoose.model("Employee", EmployeeSchema);
