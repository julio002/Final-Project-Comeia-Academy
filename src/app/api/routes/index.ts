import { Router } from "express"
import authRouter from "./AuthRoute"
import customersRouter from "./CustomersRoute"
import rentalRouter from "./RentalRoute"

const router = Router()

router.use('/auth', authRouter)
router.use("/customers", customersRouter)
router.use("/rental", rentalRouter)

export default router