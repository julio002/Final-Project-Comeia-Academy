import { Router } from "express";
import { AuthController } from "../controllers";
import { AuthSignUpValidation, AuthSignInValidation } from "../validations";

const authRouter = Router();

const authController = new AuthController();

authRouter.post("/signup", AuthSignUpValidation, authController.signUp);

authRouter.post("/signin", AuthSignInValidation, authController.signIn);

export default authRouter;