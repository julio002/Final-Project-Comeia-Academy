import { Router } from "express";
import { AuthController } from "../controllers";
import { AuthSignUpValidation } from "../validations";

const authRouter = Router();

const authController = new AuthController();

authRouter.post("/signup", AuthSignUpValidation, authController.signUp);

authRouter.post("/signin", authController.signIn);

export default authRouter;