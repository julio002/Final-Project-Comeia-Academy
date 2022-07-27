import { StoreInput, StoreOutput } from "@/shared/types/interfaces/Store"
import { BaseRepository } from "."
import { IStoreRepository } from ".."
import { Store } from "../../models"

class StoreRepository extends BaseRepository<StoreInput, StoreOutput> implements IStoreRepository {
    constructor() {
        super(Store)
    }
}

export default StoreRepository