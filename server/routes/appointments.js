import express from "express";
import { getAllAppointments, addAppointment, checkAvailability, deleteAppointment, approveAppointment, rejectAppointment, updatePaymentStatus } from "../controllers/appointmentController.js";
import { authenticate, restrict } from "../auth/verifyToken.js";

const router = express.Router({ mergeParams: true });

router.get('/', getAllAppointments);
router.post('/book_appointment/:id', addAppointment);
router.post('/check_availability', checkAvailability);
router.delete('/delete_appointment/:id', deleteAppointment);
router.put('/approve_appointment/:id', approveAppointment);
router.put('/reject_appointment/:id', rejectAppointment);
router.put('/update_payment_status/:id', updatePaymentStatus);

export default router;