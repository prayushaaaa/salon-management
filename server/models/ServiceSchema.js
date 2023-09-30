import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    bgColor: {
        type: String,
        required: true
    },
    textColor: {
        type: String,
        required: true
    },
    points: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
    },
    timings: {
        type: Array,
        required: true
    },

    reviews: [{ type: mongoose.Types.ObjectId, ref: "Review" }],
    averageRating: {
        type: Number,
        default: 0,
    },
    totalRating: {
        type: Number,
        default: 0,
    },
});

export default mongoose.model('Service', serviceSchema);
