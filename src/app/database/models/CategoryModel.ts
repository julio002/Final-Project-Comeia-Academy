import {
  Table,
  Column,
  Model,
  UpdatedAt,
  Length,
  AllowNull,
  AutoIncrement,
  HasOne,
} from "sequelize-typescript";
import Film_Category from "./FilmCategoryModel";

@Table
class Category extends Model {
  @Length({ max: 255 })
  @AutoIncrement
  @AllowNull(false)
  @HasOne(() => Film_Category)
  @Column({ primaryKey: true })
  category_id!: Film_Category[];

  @Length({ min: 3, max: 255 })
  @AllowNull(false)
  @Column
  name!: string;

  @UpdatedAt
  last_update!: Date;

  }
export default Category;
