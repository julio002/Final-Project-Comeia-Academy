import { Router } from "express"
import { AuthController } from "../controllers"
import { AuthSignValidation } from "../Validations/AuthValidation"

const authRouter = Router()

const authController = new AuthController()

authRouter.post("/signup", AuthSignValidation,authController.signUp)

authRouter.post("/signin", AuthSignValidation,authController.signIn)

export default authRouter