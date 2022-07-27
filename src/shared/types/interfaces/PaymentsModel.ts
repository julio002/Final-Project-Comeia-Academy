export interface PaymentsInput {
    customer_id: number,
    staff_id: number,
    rental_id: number,
    amount: number
}

export interface PaymentsOutput{
    payment_id: number,
    customer_id: number,
    staff_id: number,
    rental_id: number,
    amount: number
    payment_date: number,
    last_update: number,
}