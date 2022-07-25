import { FilmActorInput, FilmActorOutput } from "@/shared/types/interfaces/FilmActor";
import IBaseRepository from "./IBaseRepository";

interface IFilmActorRepository extends IBaseRepository<FilmActorInput , FilmActorOutput>{}

export default IFilmActorRepository;