import { CityInput, CityOutput } from "@/shared/types/interfaces/City"
import { BaseRepository } from "."
import { ICityRepository } from ".."
import { City } from "../../models"

class CityRepository extends BaseRepository<CityInput, CityOutput> implements ICityRepository {
    constructor() {
        super(City)
    }
}

export default CityRepository