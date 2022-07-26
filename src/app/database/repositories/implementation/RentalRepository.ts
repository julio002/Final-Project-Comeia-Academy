import { RentalInput, RentalOutput } from "@/shared/types/interfaces/Rental";
import { BaseRepository } from ".";
import { Rental } from "../../models";

class RentalRepository extends BaseRepository<RentalInput, RentalOutput> {
    constructor() {
        super(Rental)
    }
}

export default RentalRepository