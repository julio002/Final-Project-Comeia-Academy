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
} from "sequelize-typescript";
import Film_Actor from "./FilmActorModel";

@Table
class Actor extends Model {
  @Length({ max: 255 })
  @AutoIncrement
  @AllowNull(false)
  @ForeignKey(() => Film_Actor)
  @PrimaryKey
  @Column(DataType.INTEGER)
  actor_id!: number;

  @BelongsTo(() => Film_Actor)
  film_actor!: Film_Actor;

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
