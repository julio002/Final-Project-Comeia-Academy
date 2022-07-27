import { AddressInput, AddressOutput } from "@/shared/types/interfaces/Address"
import { BaseRepository } from "."
import { IAddressRepository } from ".."
import { Address } from "../../models"

class AddressRepository extends BaseRepository<AddressInput, AddressOutput> implements IAddressRepository {
    constructor() {
        super(Address)
    }
}

export default AddressRepository