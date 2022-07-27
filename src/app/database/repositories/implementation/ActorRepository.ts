import BaseRepository from "./BaseRepository";
import { ActorInput, ActorOutput } from "@/shared/types/interfaces/Actor";
import IActorRepository from "../IActorRepository";
import Actor from "../../models/ActorModel";

class ActorRepository extends BaseRepository<ActorInput, ActorOutput> implements IActorRepository{
    constructor(){
        super(Actor)
    }
}
export default ActorRepository;