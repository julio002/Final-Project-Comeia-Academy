import { CustomersInput, CustomersOutput } from "@/shared/types/interfaces/Customers"
import { Customers } from "../../models"
import ICustomersRepository from "../ICustomersRepository"
import BaseRepository from "./BaseRepository"

class CustomersRepository extends BaseRepository<CustomersInput, CustomersOutput> implements ICustomersRepository {
    constructor() {
        super(Customers)
    }
}

export default CustomersRepository