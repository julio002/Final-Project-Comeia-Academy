import {
    Table,
    Column,
    Model,
    UpdatedAt,
    Length,
    AllowNull,
    AutoIncrement,
    BelongsTo,
  } from "sequelize-typescript";
import Category from "./CategoryModel";

  @Table
class Film_Category extends Model {
  @Length({ max: 255 })
  @AutoIncrement
  @AllowNull(false)
  @BelongsTo(() => Category)
  @Column({ primaryKey: true })
  film_id!: Category;

  @Length({max: 255 })
  @AllowNull(false)
  @Column
  category_id!: number;

  @UpdatedAt
  last_update!: Date;

  }
export default Film_Category;
