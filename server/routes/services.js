import express from "express";
import { updateService, deleteService, getSingleService, allService, addService } from "../controllers/serviceController.js";
import { authenticate, restrict } from "../auth/verifyToken.js";
import reviewRouter from './reviews.js';

const router = express.Router();

router.use('/:serviceId/reviews', reviewRouter);

router.post('/', addService);
router.get('/:id', getSingleService);
router.get('/', allService);
router.put('/:id', updateService);
router.delete('/:id', deleteService);

export default router;
