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
    DataType
} from "sequelize-typescript";

@Table
class inventory extends Model {

    @Length({ max: 255 })
    @AutoIncrement
    @PrimaryKey
    @Column(DataType.INTEGER)
    inventory_id!: number

    @Length({ max: 255 })
    @AllowNull(false)
    @ForeignKey(() => Film)
    @BelongsTo(() => Film)
    @Column(DataType.INTEGER)
    film_id!: Film;

    @UpdatedAt
    last_update!: Date;
}

export default inventory;
