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
} from "sequelize-typescript"
import City from "./CityModel"

@Table({
    tableName: "country"
})
class Country extends Model {

    @Length({ max: 255 })
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    country_id!: number

    @HasMany(() => City)
    city!: City[]

    @Length({ max: 50 })
    @AllowNull(false)
    @Column(DataType.STRING(50))
    country!: string

    @UpdatedAt
    last_update!: Date
}

export default Country
