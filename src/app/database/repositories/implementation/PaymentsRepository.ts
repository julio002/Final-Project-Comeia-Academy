import { PaymentsInput, PaymentsOutput } from "@/shared/types/interfaces/PaymentsModel"
import { BaseRepository } from "."
import { IPaymentsRepository } from ".."
import { Payments } from "../../models"

class PaymentsRepository extends BaseRepository<PaymentsInput,PaymentsOutput> implements IPaymentsRepository {
    constructor() {
        super(Payments)
    }
}
export default PaymentsRepository