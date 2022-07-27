import { CustomersInput, CustomersOutput } from "@/shared/types/interfaces/Customers"
import IBaseRepository from "./IBaseRepository"

interface ICustomersRepository extends IBaseRepository<CustomersInput, CustomersOutput> {}

export default ICustomersRepository