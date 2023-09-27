import Review from "../models/ReviewSchema.js";
import Service from "../models/ServiceSchema.js";

export const getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find({});
        res.status(200).json({ status: true, message: "Successful", data: reviews });
    } catch (err) {
        res.status(404).json({ status: true, message: "Not found" });
    }
};

export const createReview = async (req, res) => {
    if (!req.body.service) req.body.service = req.params.serviceId;
    if (!req.body.user) req.body.user = req.userId;

    const newReview = new Review(req.body);

    try {
        const savedReview = await newReview.save();
        await Service.findByIdAndUpdate(req.body.service, {
            $push: { reviews: savedReview._id }
        })
        res.status(200).json({ success: true, message: "Review submitted." })
    }
    catch (err) {
        res.status(500).json({ success: false, message: "Review submitting failed." })
    }
}