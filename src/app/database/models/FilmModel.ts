import {
  Table,
  Column,
  Model,
  UpdatedAt,
  Length,
  AllowNull,
  AutoIncrement,
  BelongsTo,
  DataType,
  PrimaryKey,
  HasMany,
  HasOne,
  ForeignKey,
} from "sequelize-typescript";
import { FilmCategory } from ".";
import Language from "./LanguageModel";

@Table
class Film extends Model {
  @Length({ max: 255 })
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  film_id!: number;

  @HasOne(() => FilmCategory)
  filmCategory!: FilmCategory
  
  @Length({ max: 255 })
  @AllowNull(false)
  @Column(DataType.STRING)
  title!: string;

  @Length({ max: 255 })
  @Column(DataType.STRING)
  description!: string;

  @Length({ max: 255 })
  @Column(DataType.DATE)
  release_year!: Date;

  @Length({ max: 255 })
  @AllowNull(false)
  @ForeignKey(() => Language)
  @Column(DataType.INTEGER)
  language_id!: number;
  
  @BelongsTo(() => Language)
  language!: Language

  @Length({ max: 255 })
  @AllowNull(false)
  @Column(DataType.INTEGER)
  rental_duration!: number;

  @Length({ max: 255 })
  @AllowNull(false)
  @Column(DataType.DECIMAL(4, 2))
  rental_rate!: number;

  @Length({ max: 255 })
  @Column(DataType.INTEGER)
  length!: number;

  @Length({ max: 255 })
  @AllowNull(false)
  @Column(DataType.DECIMAL(5, 2))
  replacemente_cost!: number;

  @Length({ max: 255 })
  @Column(DataType.STRING)
  rating!: string;

  @UpdatedAt
  last_update!: Date;

  @Length({ max: 255 })
  @Column(DataType.STRING)
  special_features!: string;

  @Length({ max: 255 })
  @AllowNull(false)
  @Column(DataType.STRING)
  full_text!: string;
}
export default Film;
