import {
  Table,
  Column,
  Model,
  UpdatedAt,
  Length,
  AllowNull,
  AutoIncrement,
  ForeignKey,
  PrimaryKey,
  DataType,
  HasOne,
  BelongsTo,
  HasMany,
} from "sequelize-typescript";
import FilmActor from "./FilmActorModel";

@Table
class Actor extends Model {
  @Length({ max: 255 })
  @PrimaryKey
  @Column(DataType.INTEGER)
  actor_id!: number;

  @HasOne(() => FilmActor)
  film_actor!: FilmActor;
  
  @Length({ max: 45 })
  @AllowNull(false)
  @Column(DataType.STRING)
  first_name!:string;

  @Length({ max: 45 })
  @AllowNull(false)
  @Column(DataType.STRING)
  last_name!:string;


  @UpdatedAt
  last_update!: Date;
}
export default Actor;
