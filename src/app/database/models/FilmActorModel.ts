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
  } from "sequelize-typescript";
import Actor from "./ActorModel";
  import Film from "./FilmModel";
  
  @Table
  class FilmActor extends Model {
    @Length({ max: 255 })
    @AutoIncrement
    @ForeignKey(() => Actor)
    @Column(DataType.INTEGER)
    actor_id!: number;
  
    @HasOne(() => Actor)
    actor!: Actor;
  
    @Length({ max: 255 })
    @AllowNull(false)
    @ForeignKey(() => Film)
    @Column(DataType.INTEGER)
    film_id!: number;
    
    @HasOne(() => Film)
    film!: Film
  
    @UpdatedAt
    last_update!: Date;
  }
  export default FilmActor;
  