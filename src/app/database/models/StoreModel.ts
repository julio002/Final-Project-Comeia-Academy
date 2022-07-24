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
import { Address, Staff } from "."

@Table({
    tableName: "store"
})
class Store extends Model {
    @Length({ max: 255 })
    @AutoIncrement
    @PrimaryKey
    @Column(DataType.INTEGER)
    store_id!: number

    @Length({ max: 255 })
    @ForeignKey(() => Address)
    @AllowNull(false)
    @Column(DataType.INTEGER)
    manager_staff_id!: string

    @BelongsTo(() => Staff)
    staff!: Staff

    @Length({ max: 255 })
    @ForeignKey(() => Address)
    @AllowNull(false)
    @Column(DataType.INTEGER)
    address_id!: number

    @BelongsTo(() => Address)
    address!: Address

    @UpdatedAt
    last_update!: Date
}

export default Store
