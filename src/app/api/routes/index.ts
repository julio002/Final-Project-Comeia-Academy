<<<<<<< HEAD
import { Router } from "express";
import authRouter from "./AuthRoute";
import filmRouter from "./FilmRoute";
=======
import { Router } from "express"
import { ensureIsAuthenticated } from "../middlewares/AuthMiddlewares"
import authRouter from "./AuthRoute"
import customersRouter from "./CustomersRoute"
import rentalRouter from "./RentalRoute"
>>>>>>> 68dd63e468b8b918ec496ff23d46a0abdb86522c

const router = Router()

<<<<<<< HEAD
router.use("/auth", authRouter);
router.use("/film", filmRouter);

export default router;
=======
router.use('/auth', authRouter)

router.use(ensureIsAuthenticated)

router.use("/customers", customersRouter)
router.use("/rental", rentalRouter)

export default router
>>>>>>> 68dd63e468b8b918ec496ff23d46a0abdb86522c
