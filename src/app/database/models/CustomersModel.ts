import {
    Table,
    Column,
    Model,
    CreatedAt,
    UpdatedAt,
    IsEmail,
    Length,
    AllowNull,
    Unique,
    Default,
    AutoIncrement
    
} from "sequelize-typescript";
import { Optional } from "sequelize/types";

@Table
class Customers extends Model {

    @Length({ max: 255 })
    @AllowNull(false)
    @AutoIncrement
    @Column
    @Unique
    customer_id!: number

    @Length({ max: 255 })
    @AllowNull(false)
    @Column
    store_id!: number;

    @Length({ min: 3, max: 254 })
    @AllowNull(false)
    @Column
    first_name!: string;

    @Length({ max: 60 })
    @AllowNull(false)
    @Column
    last_name!: string;

    @IsEmail
    @Length({ max: 254 })
    @Unique
    @Column
    email!: string;

    @Length({ max: 255 })
    @AllowNull(false)
    @Column
    address_id!: number;

    @AllowNull(false)
    @Default(true)
    @Column
    activebool!: boolean;

    @CreatedAt
    create_date!: Date;

    @UpdatedAt
    last_update!: Date;

    @Column
    active!: number;
}

export interface CustomersInput
    extends Optional<Customers, "customer_id"> {}
export interface CustomersOutput extends Required<Customers> {}

export default Customers;
