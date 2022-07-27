export interface CustomersInput {
    store_id: number,
    first_name: string,
    last_name: string,
    email: string,
    address_id: number,
}

export interface CustomersOutput{
    customer_id: number,
    store_id: number,
    first_name: string,
    last_name: string,
    email: string,
    address_id: number,
}