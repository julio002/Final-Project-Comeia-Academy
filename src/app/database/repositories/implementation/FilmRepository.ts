import BaseRepository from "./BaseRepository";
import { FilmInput, FilmOutput } from "@/shared/types/interfaces/Film";
import IFilmRepository from "../IFilmRepository";
import {Film} from "../../models";

class FilmRepository extends BaseRepository<FilmInput, FilmOutput> implements IFilmRepository{
    constructor(){
        super(Film)
    }
}
export default FilmRepository;