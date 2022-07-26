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
    AutoIncrement,
    PrimaryKey,
    DataType,
    ForeignKey,
    BelongsTo,
    HasOne,
    HasMany
} from "sequelize-typescript";
import { Address, Payments, Rental } from ".";

@Table({
    tableName: "customer"
})
class Customers extends Model {

    @Length({ max: 255 })
    @AutoIncrement
    @Unique
    @PrimaryKey
    @Column(DataType.INTEGER)
    customer_id!: number

    @HasOne(() => Rental)
    rental!: Rental[]

    @HasMany(() => Payments)
    payments!: Payments[]

    @Length({ max: 255 })
    @AllowNull(false)
    @Column(DataType.INTEGER)
    store_id!: number;

    @Length({ min: 3, max: 45 })
    @AllowNull(false)
    @Column(DataType.STRING(45))
    first_name!: string;

    @Length({ max: 45 })
    @AllowNull(false)
    @Column(DataType.STRING(45))
    last_name!: string;

    @IsEmail
    @Length({ max: 50 })
    @Unique
    @Column(DataType.STRING(50))
    email!: string;

    @Length({ max: 255 })
    @ForeignKey(() => Address)
    @AllowNull(false)
    @Column(DataType.INTEGER)
    address_id!: number;

    @BelongsTo(() => Address)
    address!: Address

    @Length({ max: 255 })
    @AllowNull(false)
    @Column(DataType.BOOLEAN)
    activebool!: boolean;

    @CreatedAt
    create_date!: Date;

    @UpdatedAt
    last_update!: Date;

    @Length({ max: 255 })
    @Column(DataType.INTEGER)
    active!: number;

}

export default Customers;
