import express from "express";
import { initiatePayment, paymentStatus } from "../controllers/phonpeController.js";
import { authenticate, restrict } from "../auth/verifyToken.js";

const router = express.Router();

router.post('/payment/:appointmentId', initiatePayment);
router.post('/status', paymentStatus);

export default router;
