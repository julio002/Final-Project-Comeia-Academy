import { Router } from "express";
import { CustomersController } from "../controllers";

const customersRouter = Router()

const customersController = new CustomersController()

customersRouter.get("/", customersController.getAll)

customersRouter.get("/:id", customersController.getById)

customersRouter.post("/", customersController.create)

customersRouter.put("/:id", customersController.updateById)

customersRouter.delete("/:id", customersController.deleteById)