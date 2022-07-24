import { StaffInput, StaffOutput } from "@/shared/types/interfaces/Staff";
import { BaseRepository } from ".";
import { Staff } from "../../models";

class StaffRepository extends BaseRepository<StaffInput, StaffOutput> {
    constructor() {
        super(Staff)
    }
}

export default StaffRepository