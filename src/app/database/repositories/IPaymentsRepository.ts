import { PaymentsInput, PaymentsOutput } from "@/shared/types/interfaces/PaymentsModel"
import IBaseRepository from "./IBaseRepository"

interface IPaymentsRepository extends IBaseRepository<PaymentsInput,PaymentsOutput> {}

export default IPaymentsRepository