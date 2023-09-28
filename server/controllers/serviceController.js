import Service from "../models/ServiceSchema.js";

export const addService = async (req, res) => {
    try {
        const newService = new Service(req.body);
        const savedService = await newService.save();

        res.status(201).json({ success: true, message: "Service added successfully.", data: savedService });
    }
    catch (err) {
        res.status(500).json({ success: false, message: "Failed to add service." });
    }
}

export const updateService = async (req, res) => {
    const id = req.params.id;

    try {
        const updatedService = await Service.findByIdAndUpdate(id, { $set: req.body }, { new: true });

        res.status(200).json({ success: true, message: "Successfully updated.", data: updatedService });
    }
    catch (err) {
        res.status(500).json({ success: false, message: "Failed to update." });
    }
}

export const deleteService = async (req, res) => {
    const id = req.params.id;

    try {
        await Service.findByIdAndDelete(id);

        res.status(200).json({ success: true, message: "Successfully deleted." });
    }
    catch (err) {
        res.status(500).json({ success: false, message: "Failed to delete." });
    }
}

export const getSingleService = async (req, res) => {
    const id = req.params.id;

    try {
        const service = await Service.findById(id).populate("reviews");

        res.status(200).json({ success: true, message: "Service found", data: service });
    }
    catch (err) {
        res.status(404).json({ success: false, message: "Service not found" });
    }
}

export const allService = async (req, res) => {
    try {
        const { query } = req.query;
        let services;

        if (query) {
            services = await Service.find({ name: { $regex: query, $options: "i" } })
        }
        else {
            services = await Service.find({});
        }

        res.status(200).json({ success: true, message: "Services found!", data: services });
    }
    catch (err) {
        res.status(500).json({ success: false, message: "No services found" });
    }
}