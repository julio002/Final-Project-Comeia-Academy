import {
  Table,
  Column,
  Model,
  UpdatedAt,
  Length,
  AllowNull,
  BelongsTo,
  DataType,
  PrimaryKey,
  HasOne,
  ForeignKey,
  HasMany,
  Default,
} from "sequelize-typescript";
import { FilmActor, FilmCategory, Inventory, Language } from ".";

@Table({
  tableName: "film"
})
class Film extends Model {
  @Length({ max: 255 })
  @PrimaryKey
  @Column(DataType.INTEGER)
  film_id!: number;

  @HasOne(() => FilmCategory)
  filmCategory!: FilmCategory

  @HasOne(() => FilmActor)
  filmActor!: FilmActor
  
  @HasMany(()=> Inventory)
  inventory!: Inventory

  @Length({ max: 255 })
  @AllowNull(false)
  @Column(DataType.STRING)
  title!: string;

  @Length({ max: 255 })
  @Column(DataType.STRING)
  description!: string;

  @Length({ max: 255 })
  @Column(DataType.STRING)
  release_year!: string;

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
  @Default(19.99)
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
}
export default Film;
