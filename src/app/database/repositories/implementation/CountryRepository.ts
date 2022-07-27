import { CountryInput, CountryOutput } from "@/shared/types/interfaces/Country"
import { BaseRepository } from "."
import { ICountryRepository } from ".."
import { Country } from "../../models"

class CountryRepository extends BaseRepository<CountryInput, CountryOutput> implements ICountryRepository {
    constructor() {
        super(Country)
    }
}

export default CountryRepository