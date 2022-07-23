import BaseRepository from "./BaseRepository";
import {FilmCategory } from "../../models";
import { FilmCategoryInput, FilmCategoryOutput } from "@/shared/types/interfaces/FilmCategory";
import IFilmCategoryRepository from "../IFilmCategoryRepository";

class FilmCategoryRepository extends BaseRepository<FilmCategoryInput, FilmCategoryOutput> implements IFilmCategoryRepository{
    constructor(){
        super(FilmCategory)
    }
}
export default FilmCategoryRepository;