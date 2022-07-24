import {
    Table,
    Column,
    Model,
    UpdatedAt,
    Length,
    AllowNull,
    AutoIncrement,
    PrimaryKey,
    DataType,
    HasMany,
    ForeignKey,
    BelongsTo
} from "sequelize-typescript";
import { City, Customers, Staff } from ".";

@Table
class address extends Model {

    @Length({ max: 255 })
    @AutoIncrement
    @PrimaryKey
    @Column(DataType.INTEGER)
    address_id!: number;

    @HasMany(() => Customers)
    customers!: Customers[]

    @HasMany(() => Staff)
    staff!: Staff[]

    @HasMany(() => Store)
    store!: Store[]

    @Length({ max: 50 })
    @AllowNull(false)
    @Column(DataType.STRING(50))
    address!: string;

    @Length({ max: 50 })
    @Column(DataType.STRING(50))
    address2!: string;

    @Length({ max: 20 })
    @AllowNull(false)
    @Column(DataType.STRING(20))
    district!: string;

    @Length({ max: 255 })
    @ForeignKey(() => City)
    @AllowNull(false)
    @Column(DataType.INTEGER)
    city_id!: number;

    @BelongsTo(() => City)
    city!: City

    @Length({ max: 10 })
    @Column(DataType.STRING(10))
    postal_code!: string;

    @Length({ max: 20 })
    @AllowNull(false)
    @Column(DataType.STRING(20))
    phone!: string;

    @UpdatedAt
    last_update!: Date;
}

export default address;
