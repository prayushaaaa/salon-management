import express from "express";
import { getAllAppointments, addAppointment, checkAvailability } from "../controllers/appointmentController.js";
import { authenticate, restrict } from "../auth/verifyToken.js";

const router = express.Router({ mergeParams: true });

router.get('/', getAllAppointments);
router.post('/book_appointment/:id', addAppointment);
router.post('/check_availability', checkAvailability);

export default router;