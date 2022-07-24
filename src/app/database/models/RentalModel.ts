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
    ForeignKey,
    BelongsTo,
} from "sequelize-typescript"
import { Customers, Inventory, Staff } from "."

@Table({
    tableName: "rental"
})
class Rental extends Model {
    @Length({ max: 255 })
    @AutoIncrement
    @PrimaryKey
    @Column(DataType.INTEGER)
    rental_id!: number


    @Length({ max: 255 })
    @AllowNull(false)
    @Column(DataType.DATE)
    rental_date!: Date

    @Length({ max: 255 })
    @ForeignKey(() => Inventory)
    @AllowNull(false)
    @Column(DataType.INTEGER)
    inventory_id!: number

    @BelongsTo(() => Inventory)
    inventory!: Inventory

    @Length({ max: 255 })
    @ForeignKey(() => Customers)
    @AllowNull(false)
    @Column(DataType.INTEGER)
    customer_id!: number

    @BelongsTo(() => Customers)
    Customer!: Customers

    @Length({ max: 255 })
    @Column(DataType.DATE)
    return_date!: Date

    @Length({ max: 255 })
    @ForeignKey(() => Staff)
    @AllowNull(false)
    @Column(DataType.INTEGER)
    staff_id!: string

    @BelongsTo(() => Staff)
    staff!: Staff

    @UpdatedAt
    last_update!: Date
}

export default Rental
