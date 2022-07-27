import { StaffInput, StaffOutput } from "@/shared/types/interfaces/Staff"
import { BaseRepository } from "."
import { IStaffRepository } from ".."
import { Staff } from "../../models"

class StaffRepository extends BaseRepository<StaffInput, StaffOutput> implements IStaffRepository {
    constructor() {
        super(Staff)
    }
}

export default StaffRepository