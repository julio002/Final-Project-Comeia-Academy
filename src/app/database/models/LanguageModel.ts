import {
  Table,
  Column,
  Model,
  UpdatedAt,
  Length,
  AllowNull,
  AutoIncrement,
  BelongsTo,
  ForeignKey,
  PrimaryKey,
  DataType,
  HasMany,
} from "sequelize-typescript";
import Film from "./FilmModel";

@Table({
  tableName: "language"
})
class Language extends Model {
  @Length({ max: 255 })
  @PrimaryKey
  @Column(DataType.INTEGER)
  language_id!: number;

  @HasMany(() => Film)
  film!: Film;

  @Length({ max: 255 })
  @AllowNull(false)
  @Column(DataType.STRING)
  name!: string;

  @UpdatedAt
  last_update!: Date;
}
export default Language;
