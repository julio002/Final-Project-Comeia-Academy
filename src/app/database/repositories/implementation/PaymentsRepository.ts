import { PaymentsInput, PaymentsOutput } from "@/shared/types/interfaces/PaymentsModel";
import { BaseRepository } from ".";
import { Payments } from "../../models";

class PaymentsRepository extends BaseRepository<PaymentsInput,PaymentsOutput> {
    constructor() {
        super(Payments)
    }
}
export default PaymentsRepository