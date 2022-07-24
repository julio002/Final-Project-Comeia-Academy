import {
    Table,
    Column,
    Model,
    UpdatedAt,
    Length,
    AllowNull,
    Default,
    AutoIncrement,
    PrimaryKey,
    DataType,
    HasMany,
    ForeignKey,
    BelongsTo,
    IsEmail,
    Unique,
    HasOne
} from "sequelize-typescript";
import { Address, Store, Payments } from ".";

@Table({
    tableName: "staff"
})
class Staff extends Model {

    @Length({ max: 255 })
    @AutoIncrement
    @PrimaryKey
    @Column(DataType.INTEGER)
    staff_id!: number;

    @HasMany(() => Rental)
    rental!: Rental[]

    @HasMany(() => Payments)
    payments!: Payments[]

    @HasOne(() => Store)
    store!: Store[]

    @Length({ max: 45 })
    @AllowNull(false)
    @Column(DataType.STRING(45))
    first_name!: string

    @Length({ max: 45 })
    @AllowNull(false)
    @Column(DataType.STRING(45))
    last_name!: string

    @Length({ max: 255 })
    @ForeignKey(() => Address)
    @AllowNull(false)
    @Column(DataType.INTEGER)
    address_id!: number;

    @BelongsTo(() => Address)
    address!: Address

    @IsEmail
    @Length({ max: 50 })
    @Unique
    @Column(DataType.STRING(50))
    email!: string;

    @Length({ max: 255 })
    @AllowNull(false)
    @Column(DataType.INTEGER)
    store_id!: number;

    @Length({ max: 255})
    @AllowNull(false)
    @Default(true)
    @Column(DataType.INTEGER)
    active!: number;

    @Length({ max: 16 })
    @AllowNull(false)
    @Column(DataType.STRING(16))
    username!: string

    @Length({ max: 40 })
    @AllowNull(false)
    @Column(DataType.STRING(40))
    password!: string

    @UpdatedAt
    last_update!: Date;

}

export default Staff;
