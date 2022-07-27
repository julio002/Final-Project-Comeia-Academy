import { Router } from "express";
import { FilmController } from "../controllers";
import { FilmCreateValidation, FilmUpdateValidation } from "../validations";

const filmRouter = Router();

const filmController = new FilmController();

filmRouter.get("/", filmController.getAll);

filmRouter.get("/:id", filmController.getById);

filmRouter.post("/", FilmCreateValidation, filmController.create);

filmRouter.put("/:id", FilmUpdateValidation, filmController.updateById);

filmRouter.delete("/:id", filmController.deleteById);

export default filmRouter;
