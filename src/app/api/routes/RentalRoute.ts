import { Router } from "express"
import { RentalController } from "../controllers"
import { RentalCreateValidation, RentalUpdateValidation } from "../Validations/RentalValidation"

const rentalRouter = Router()

const rentalController = new RentalController()

rentalRouter.get("/", rentalController.getAll)

rentalRouter.get("/:id", rentalController.getById)

rentalRouter.post("/", RentalCreateValidation, rentalController.create)

rentalRouter.put("/:id", RentalUpdateValidation, rentalController.updateById)

rentalRouter.delete("/:id", rentalController.deleteById)

export default rentalRouter