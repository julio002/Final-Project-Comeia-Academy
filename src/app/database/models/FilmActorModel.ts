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
import Actor from "./ActorModel";
  import Film from "./FilmModel";
  
  @Table
  class FilmActor extends Model {
    @Length({ max: 255 })
    @ForeignKey(() => Actor)
    @PrimaryKey
    @Column(DataType.INTEGER)
    actor_id!: number;
  
    @BelongsTo(() => Actor)
    actor!: Actor;
  
    @Length({ max: 255 })
    @AllowNull(false)
    @ForeignKey(() => Film)
    @Column(DataType.INTEGER)
    film_id!: number;
    
    @BelongsTo(() => Film)
    film!: Film
  
    @UpdatedAt
    last_update!: Date;
  }
  export default FilmActor;
  