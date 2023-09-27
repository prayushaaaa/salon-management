import Employee from "../models/EmployeeSchema.js";

export const updateEmployee = async (req, res) => {
    const id = req.params.id;
    try {
        const updatedEmployee = await Employee.findByIdAndUpdate(id, { $set: req.body }, { new: true });

        res.status(200).json({ success: true, message: "Successfully updated.", data: updatedEmployee });
    }
    catch (err) {
        res.status(500).json({ success: false, message: "Failed to update." });
    }
}

export const deleteEmployee = async (req, res) => {
    const id = req.params.id;

    try {
        await Employee.findByIdAndDelete(id);

        res.status(200).json({ success: true, message: "Successfully deleted." });
    }
    catch (err) {
        res.status(500).json({ success: false, message: "Failed to delete." });
    }
}

export const getSingleEmployee = async (req, res) => {
    const id = req.params.id;

    try {
        const employee = await Employee.findById(id).select("-password").select("-role");

        res.status(200).json({ success: true, message: "User found.", data: employee });
    }
    catch (err) {
        res.status(404).json({ success: false, message: "User not found" });
    }
}

export const allEmployee = async (req, res) => {

    try {
        const employees = await Employee.find({ isApproved: "approved" }).select("-password").select("-role");

        res.status(200).json({ success: true, message: "Users found", data: employees });
    }
    catch (err) {
        res.status(500).json({ success: false, message: "User not found." });
    }
}