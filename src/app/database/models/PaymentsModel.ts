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
    BelongsTo
} from "sequelize-typescript"
import { Customers, Rental, Staff } from "."

@Table({
    tableName: "payment"
})
class Payments extends Model {
    @Length({ max: 255 })
    @AutoIncrement
    @PrimaryKey
    @Column(DataType.INTEGER)
    payment_id!: number

    @Length({ max: 255 })
    @ForeignKey(() => Customers)
    @AllowNull(false)
    @Column(DataType.INTEGER)
    customer_id!: string

    @BelongsTo(() => Customers)
    customer!: Customers

    @Length({ max: 255 })
    @ForeignKey(() => Staff)
    @AllowNull(false)
    @Column(DataType.INTEGER)
    staff_id!: string

    @BelongsTo(() => Staff)
    staff!: Staff

    @Length({ max: 255 })
    @ForeignKey(() => Rental)
    @AllowNull(false)
    @Column(DataType.INTEGER)
    rental_id!: number

    @BelongsTo(() => Rental)
    rental!: Rental

    @Length({ max: 255 })
    @AllowNull(false)
    @Column(DataType.DECIMAL(5, 2))
    amount!: number

    @Length({ max: 255 })
    @AllowNull(false)
    @Column(DataType.DATE)
    payment_date!: Date
}

export default Payments
