import { Router } from "express";
import authRouter from "./AuthRoute";

const router = Router();

router.use('/auth', authRouter);

export default router;