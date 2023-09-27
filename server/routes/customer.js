import express from "express";
import { updateCustomer, deleteCustomer, getSingleCustomer, allCustomer } from "../controllers/customerController.js";
import { authenticate, restrict } from "../auth/verifyToken.js";

const router = express.Router();
router.get('/:id', authenticate, restrict(["customer"]), getSingleCustomer);
router.get('/', authenticate, restrict(["employee"]), allCustomer);
router.put('/:id', authenticate, restrict(["customer"]), updateCustomer);
router.delete('/:id', authenticate, restrict(["customer"]), deleteCustomer);

export default router;
