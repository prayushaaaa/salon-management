import express from "express";
import { getAllAppointments, addAppointment } from "../controllers/appointmentController.js";
import { authenticate, restrict } from "../auth/verifyToken.js";

const router = express.Router({ mergeParams: true });

router.get('/', getAllAppointments);
router.post('/book_appointment/:id', addAppointment);

export default router;