import { FilmCategoryInput, FilmCategoryOutput } from "@/shared/types/interfaces/FilmCategory";
import IBaseRepository from "./IBaseRepository";

interface IFilmCategoryRepository extends IBaseRepository<FilmCategoryInput , FilmCategoryOutput>{}

export default IFilmCategoryRepository;