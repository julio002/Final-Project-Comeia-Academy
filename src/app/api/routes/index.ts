import { Request, Response, Router } from "express";
import { ensureIsAuthenticated } from "../middlewares/AuthMiddlewares";
import authRouter from "./AuthRoute";


const router = Router();

router.use('/auth', authRouter);

router.use(ensureIsAuthenticated)

router.get('/', (req: Request, res: Response) => {
    res.send({ message: "Authentication successful" });
});

export default router;