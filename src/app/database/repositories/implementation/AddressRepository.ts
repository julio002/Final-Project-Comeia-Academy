import { AddressInput, AddressOutput } from "@/shared/types/interfaces/Address"
import { BaseRepository } from "."
import { Address } from "../../models"

class AddressRepository extends BaseRepository<AddressInput, AddressOutput> {
    constructor() {
        super(Address)
    }
}

export default AddressRepository