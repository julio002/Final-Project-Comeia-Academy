import {
  Table,
  Column,
  Model,
  UpdatedAt,
  Length,
  AllowNull,
  HasOne,
  Default,
} from "sequelize-typescript";
import Film_Category from "./FilmCategoryModel";

@Table({
  tableName: "category"
})
class Category extends Model {
  @Length({ max: 255 })
  @AllowNull(false)
  @Column({ primaryKey: true })
  category_id!: number;

  @HasOne(() => Film_Category)
  film_category!: Film_Category;

  @Length({ min: 3, max: 255 })
  @Default(true)
  @Column
  name!: string;

  @UpdatedAt
  last_update!: Date;
}
export default Category;
