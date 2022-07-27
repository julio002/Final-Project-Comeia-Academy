import {
  Table,
  Column,
  Model,
  UpdatedAt,
  Length,
  AllowNull,
  BelongsTo,
  ForeignKey,
  PrimaryKey,
  DataType,
} from "sequelize-typescript";
import Category from "./CategoryModel";
import Film from "./FilmModel";

@Table({
  tableName: "film_category"
})
class Film_Category extends Model {
  @Length({ max: 255 })
  @ForeignKey(() => Film)
  @PrimaryKey
  @Column(DataType.INTEGER)
  film_id!: number;

  @BelongsTo(() => Film)
  film!: Film;

  @Length({ max: 255 })
  @AllowNull(false)
  @ForeignKey(() => Category)
  @Column(DataType.INTEGER)
  category_id!: number;
  
  @BelongsTo(() => Category)
  category!: Category

  @UpdatedAt
  last_update!: Date;
}
export default Film_Category;
