import Booking from "../models/BookingSchema.js";
import Customer from "../models/CustomerSchema.js";
import ReviewSchema from "../models/ReviewSchema.js";
import Service from "../models/ServiceSchema.js";
import Employee from "../models/EmployeeSchema.js";
import moment from 'moment';


export const getAllAppointments = async (req, res) => {
    try {
        const appointments = await Booking.find({});
        res.status(200).json({ success: true, message: "Appointments found", data: appointments });
    } catch (err) {
        res.status(404).json({ status: false, message: "Not found" });
    }
};


export const addAppointment = async (req, res) => {
    try {

        req.body.status = "pending";
        const newAppointment = new Booking(req.body);
        await newAppointment.save();

        const user = await Customer.findById(newAppointment.user._id);

        if (!user) {
            throw new Error("User not found");
        }

        user.appointments.push(newAppointment);
        await user.save();

        const employee = await Employee.findById(newAppointment.employee._id);

        if (!employee) {
            throw new Error("Employee not found");
        }

        employee.appointments.push(newAppointment);
        await employee.save();


        res.status(200).json({ success: true, message: "Booked successfully." });

    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Failed to book." });
    }
};

export const checkAvailability = async (req, res) => {
    try {
        const { employee, date, time } = req.body;

        const employeeBookings = await Booking.find({ employee: employee._id });

        const sameDateItems = employeeBookings.filter(item => item.date == date);

        const hour = Number(time.split(":")[0]);
        const minute = Number(time.split(":")[1]);

        const sameTime = sameDateItems.filter((item) => {
            const hr = Number(item.time.split(":")[0]);
            const min = Number(item.time.split(":")[1]);

            const timeDiff = Math.abs(hr * 60 + min - (hour * 60 + minute));

            return timeDiff <= 60;

        });

        if (sameTime.length > 0) {
            return res.status(200).json({ success: true, message: "Checked availability.", data: false });
        }

        res.status(200).json({ success: true, message: "Checked availability.", data: true });
    }

    catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Failed to check availability." });
    }
};