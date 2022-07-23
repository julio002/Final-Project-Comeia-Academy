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
} from "sequelize-typescript";

@Table
class Country extends Model {

    @Length({ max: 255 })
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    country_id!: number;

    @Length({ max: 50 })
    @AllowNull(false)
    @Column(DataType.STRING(50))
    country!: string;

    @UpdatedAt
    last_update!: Date;
}

export default Country;
