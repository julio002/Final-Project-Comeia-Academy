import BaseRepository from "./BaseRepository";
import { FilmActorInput, FilmActorOutput } from "@/shared/types/interfaces/FilmActor";
import IFilmActorRepository from "../IFilmActorRepository";
import { FilmActor } from "../../models";

class FilmActorRepository extends BaseRepository<FilmActorInput, FilmActorOutput> implements IFilmActorRepository{
    constructor(){
        super(FilmActor)
    }
}
export default FilmActorRepository;