import { Router } from "express";
import authRouter from "./AuthRoute";
import customersRouter from "./CustomersRoute";

const router = Router();

router.use('/auth', authRouter);
router.use("/customers", customersRouter)

export default router;