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
} from "sequelize-typescript";
import Country from "./CountryModel";

@Table
class City extends Model {

    @Length({ max: 255 })
    @AutoIncrement
    @PrimaryKey
    @Column(DataType.INTEGER)
    city_id!: number;

    @Length({ max: 50 })
    @AllowNull(false)
    @Column(DataType.STRING(50))
    city!: string;

    @Length({ max: 50 })
    @ForeignKey(() => Country)
    @AllowNull(false)
    @Column(DataType.INTEGER)
    country_id!: number;

    @BelongsTo(() => Country)
    country!: Country

    @UpdatedAt
    last_update!: Date;
}

export default City;
