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
    AutoIncrement,
    PrimaryKey,
    DataType,
    ForeignKey,
    BelongsTo
} from "sequelize-typescript";
import Address from "./AddressModel";

@Table
class customer extends Model {

    @Length({ max: 255 })
    @AutoIncrement
    @Unique
    @PrimaryKey
    @Column(DataType.INTEGER)
    customer_id!: number

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
    @Default(true)
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

    @AllowNull(false)
    @Column(DataType.BOOLEAN)
    activebool!: boolean;

    @CreatedAt
    create_date!: Date;

    @UpdatedAt
    last_update!: Date;

    @Default(true)
    @Column(DataType.INTEGER)
    active!: number;
}

export default customer;
