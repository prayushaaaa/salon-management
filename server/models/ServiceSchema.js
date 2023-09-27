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
    avgRating: Number, // Making avgRating optional
    totalRating: Number // Making totalRating optional
});

export default mongoose.model('Service', serviceSchema);

