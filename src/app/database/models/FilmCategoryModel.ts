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
} from "sequelize-typescript";
import Category from "./CategoryModel";
import Film from "./FilmModel";

@Table
class Film_Category extends Model {
  @Length({ max: 255 })
  @AutoIncrement
  @AllowNull(false)
  @ForeignKey(() => Film)
  @BelongsTo(() => Film)
  @PrimaryKey
  @Column(DataType.INTEGER)
  film_id!: Film;

  @Length({ max: 255 })
  @AllowNull(false)
  @ForeignKey(() => Category)
  @BelongsTo(() => Category)
  @Column(DataType.INTEGER)
  category_id!: Category;

  @UpdatedAt
  last_update!: Date;
}
export default Film_Category;
