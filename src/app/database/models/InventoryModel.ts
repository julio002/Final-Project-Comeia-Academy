import {
    Table,
    Column,
    Model,
    UpdatedAt,
    Length,
    AllowNull,
    AutoIncrement,
    PrimaryKey,
    BelongsTo,
    ForeignKey,
    DataType,
    HasOne
} from "sequelize-typescript"
import { Rental } from "."

@Table({
    tableName: "inventory"
})
class Inventory extends Model {

    @Length({ max: 255 })
    @AutoIncrement
    @PrimaryKey
    @Column(DataType.INTEGER)
    inventory_id!: number

    @HasOne(() => Rental)
    rental!: Rental

    @Length({ max: 255 })
    @AllowNull(false)
    // @ForeignKey(() => Film)
    @Column(DataType.INTEGER)
    film_id!: Number
    
    // @BelongsTo(() => Film)
    // film!: Film

    @UpdatedAt
    last_update!: Date
}

export default Inventory
