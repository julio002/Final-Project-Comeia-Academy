import { StoreInput, StoreOutput } from "@/shared/types/interfaces/Store";
import { BaseRepository } from ".";
import { Store } from "../../models";

class StoreRepository extends BaseRepository<StoreInput, StoreOutput> {
    constructor() {
        super(Store)
    }
}

export default StoreRepository