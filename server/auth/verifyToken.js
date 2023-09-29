import jwt from 'jsonwebtoken';
import Employee from "../models/EmployeeSchema.js";
import Customer from "../models/CustomerSchema.js";

export const authenticate = async (req, res, next) => {
    const authToken = req.headers.authorization;

    if (!authToken || !authToken.startsWith('Bearer ')) {
        return res.status(401).json({ success: false, message: "No token, authorization denied!" })
    }
    try {
        const token = authToken.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

        req.userId = decoded.id;
        req.role = decoded.role;

        next();
    }
    catch (err) {
        if (err.name === "TokenExpiredError") {
            return res.status(401).json({ message: "Token is expired." })
        }
        return res.status(401).json({ success: false, message: "Invalid token" });
    }
}

export const restrict = roles => async (req, res, next) => {
    const userId = req.userId;

    let user;

    const customer = await Customer.findById(userId);
    const employee = await Employee.findById(userId);

    if (customer) {
        user = customer;
    }
    if (employee) {
        user = employee;
    }
    if (!user || !roles.includes(user.role)) {
        return res.status(401).json({ success: false, message: "You are not authorized." });
    }
    next();

}