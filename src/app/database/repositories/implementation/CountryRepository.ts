import { CountryInput, CountryOutput } from "@/shared/types/interfaces/Country"
import { BaseRepository } from "."
import { Country } from "../../models"

class CountryRepository extends BaseRepository<CountryInput, CountryOutput> {
    constructor() {
        super(Country)
    }
}

export default CountryRepository