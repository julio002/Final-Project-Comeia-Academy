import { CustomersInput, CustomersOutput } from "@/shared/types/interfaces/Customers"
import { Query } from "@/shared/types/query"
import { Customers } from "../../models"
import ICustomersRepository from "../ICustomersRepository"
import BaseRepository from "./BaseRepository"
import { getPagination } from "@/shared/utils/getPagination"

class CustomersRepository extends BaseRepository<CustomersInput, CustomersOutput> implements ICustomersRepository {
    constructor() {
        super(Customers)
    }

    public async getAll(query: Query, attributes?: string[]): Promise<CustomersOutput[]> {

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

export default CustomersRepository