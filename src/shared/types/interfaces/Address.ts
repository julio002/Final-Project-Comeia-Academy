export interface AddressInput {
    address: string,
    address2?: string,
    district: string,
    city_id: number,
    postal_code: string,
    phone: number
}

export interface AddressOutput{
    address_id: number,
    address: string,
    address2?: string,
    district: string,
    city_id: number,
    postal_code: string,
    phone: number
}