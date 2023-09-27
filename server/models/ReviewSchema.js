import mongoose from "mongoose";
import Service from "./ServiceSchema.js";

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

reviewSchema.pre(/^find/, function (next) {
  this.populate({
    path: "user",
    select: "name photo"
  });
  next();
});

reviewSchema.statics.calcAverageRatings = async function (serviceId) {
  const stats = await this.aggregate([{
    $match: { service: serviceId }
  },
  {
    $group: {
      _id: '$service',
      numOfRating: { $sum: 1 },
      avgRating: { $avg: '$rating' }
    }
  }
  ])

  await Service.findByIdAndUpdate(serviceId, {
    totalRating: stats[0].numOfRating,
    averageRating: stats[0].avgRating
  });
}

reviewSchema.post('save', function () {
  this.constructor.calcAverageRatings(this.service);
});

export default mongoose.model("Review", reviewSchema);