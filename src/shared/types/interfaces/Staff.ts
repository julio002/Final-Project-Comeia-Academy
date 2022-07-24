export interface StaffInput {
    first_name: string,
    last_name: string,
    address_id: number,
    email: number,
    store_id: string,
    active: number,
    username: string
    password: string
}

export interface StaffOutput{
    staff_id: number,
    first_name: string,
    last_name: string,
    address_id: number,
    email: number,
    store_id: string,
    active: number,
    username: string
    password: string
}