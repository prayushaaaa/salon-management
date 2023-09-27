import Customer from "../models/CustomerSchema.js";

export const updateCustomer = async (req, res) => {
    const id = req.params.id;

    try {
        const updatedCustomer = await Customer.findByIdAndUpdate(id, { $set: req.body }, { new: true });

        res.status(200).json({ success: true, message: "Successfully updated.", data: updatedCustomer });
    }
    catch (err) {
        res.status(500).json({ success: false, message: "Failed to update." });
    }
}

export const deleteCustomer = async (req, res) => {
    const id = req.params.id;

    try {
        await Customer.findByIdAndDelete(id);

        res.status(200).json({ success: true, message: "Successfully deleted." });
    }
    catch (err) {
        res.status(500).json({ success: false, message: "Failed to delete." });
    }
}

export const getSingleCustomer = async (req, res) => {
    const id = req.params.id;

    try {
        const customer = await Customer.findById(id).select("-password").select("-role");

        res.status(200).json({ success: true, message: "User found.", data: customer });
    }
    catch (err) {
        res.status(404).json({ success: false, message: "User not found" });
    }
}

export const allCustomer = async (req, res) => {

    try {
        const customers = await Customer.find({}).select("-password").select("-role");

        res.status(200).json({ success: true, message: "Users found", data: customers });
    }
    catch (err) {
        res.status(500).json({ success: false, message: "User not found." });
    }
}