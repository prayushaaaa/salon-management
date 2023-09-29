import Customer from '../models/CustomerSchema.js';
import Employee from '../models/EmployeeSchema.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const generateToken = (user) => {
    return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET_KEY, {
        expiresIn: "15d"
    });
}

export const register = async (req, res) => {
    const { email, password, name, role, photo, gender } = req.body;
    try {
        let user = null;

        if (role === 'customer') {
            user = await Customer.findOne({ email });
        }
        else if (role === 'employee') {
            user = await Employee.findOne({ email });
        }

        if (user) {
            return res.status(400).json({ message: "User already exist!" });
        }

        const salt = await bcrypt.genSalt(15);
        const hashPassword = await bcrypt.hash(password, salt);

        if (role === 'customer') {
            user = new Customer({
                name, email, password: hashPassword, photo, role, gender
            })
        }

        if (role === 'employee') {
            user = new Employee({
                name, email, password: hashPassword, photo, role
            })
        }

        await user.save();

        res.status(200).json({ success: true, message: "User successfully created" });

    }
    catch (err) {
        res.status(500).json({ success: false, message: "Internal server error!" });
    }
}

export const login = async (req, res) => {
    const { email } = req.body;

    try {
        let user = null;
        const customer = await Customer.findOne({ email });
        const employee = await Employee.findOne({ email });

        if (customer) {
            user = customer;
        }
        if (employee) {
            user = employee;
        }
        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }

        const isPasswordMatch = await bcrypt.compare(req.body.password, user.password);

        if (!isPasswordMatch) {
            return res.status(400).json({ status: false, message: "Invalid credentials" });
        }

        const token = generateToken(user);

        const { password, role, appointments, ...rest } = user._doc

        res.status(200).json({ status: true, message: "Successfully logged in", data: { ...rest, token }, role });
    }
    catch (err) {
        res.status(500).json({ status: false, message: "Login failed!" });
    }
}