import express from "express";
import { updateEmployee, deleteEmployee, getSingleEmployee, allEmployee } from "../controllers/employeeController.js";
import { authenticate, restrict } from "../auth/verifyToken.js";

const router = express.Router();
router.get('/:id', getSingleEmployee);
router.get('/', allEmployee);
router.put('/:id', authenticate, restrict(["employee"]), updateEmployee);
router.delete('/:id', authenticate, restrict(["employee"]), deleteEmployee);

export default router;
