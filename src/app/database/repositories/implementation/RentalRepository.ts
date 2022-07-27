import { RentalInput, RentalOutput } from "@/shared/types/interfaces/Rental";
import { Query } from "@/shared/types/query"
import { getPagination } from "@/shared/utils/getPagination"
import { BaseRepository } from ".";
import { IRentalRepository } from "..";
import { Rental } from "../../models";

class RentalRepository extends BaseRepository<RentalInput, RentalOutput> implements IRentalRepository {
    constructor() {
        super(Rental)
    }

    public async getAll(query: Query, attributes?: string[]): Promise<RentalOutput[]> {

        let { size, page, sort, order, ...filters } = query

        const id = "customer_id"
        const {...pagination} = getPagination(id, query)

        // @ts-ignore
        return this.model.findAndCountAll({
            where: {
                ...filters
            },
            include: { all: true },
            attributes,
            ...pagination
        })
    }
}

export default RentalRepository