import express from "express";
import cookieParser from "cookie-parser";
import cors from 'cors';
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./routes/auth.js";
import customerRoute from "./routes/customer.js";
import serviceRoute from './routes/services.js';
import employeeRoute from './routes/employees.js';
import reviewRoute from './routes/reviews.js';
import appointmentRoute from './routes/appointments.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;


//middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({ origin: true }));

app.use('/api/auth', authRoute);
app.use('/api/customers', customerRoute);
app.use('/api/services', serviceRoute);
app.use('/api/employees', employeeRoute);
app.use('/api/reviews', reviewRoute);
app.use('/api/appointments', appointmentRoute);


//databse connection

mongoose.set('strictQuery', false);
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Database is connected.");
    }
    catch (err) {
        console.log("Connection failed.");
    }
}

app.get('/', (req, res) => {
    res.send("Api is working!");
});


app.listen(port, () => {
    console.log("Server is running on port " + port);
    connectDB();
});