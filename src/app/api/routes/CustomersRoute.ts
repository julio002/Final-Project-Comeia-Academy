import { Router } from "express"
import { CustomersController } from "../controllers"
import { CustomersCreateValidation, CustomersUpdateValidation } from "../validations/CustomersValidation"

const customersRouter = Router()

const customersController = new CustomersController()

customersRouter.get("/", customersController.getAll)

customersRouter.get("/:id", customersController.getById)

customersRouter.post("/", CustomersCreateValidation, customersController.create)

customersRouter.put("/:id", CustomersUpdateValidation, customersController.updateById)

customersRouter.delete("/:id", customersController.deleteById)

export default customersRouter