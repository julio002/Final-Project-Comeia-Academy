import { CityInput, CityOutput } from "@/shared/types/interfaces/City"
import { BaseRepository } from "."
import { City } from "../../models"

class CityRepository extends BaseRepository<CityInput, CityOutput> {
    constructor() {
        super(City)
    }
}

export default CityRepository