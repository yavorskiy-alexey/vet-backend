import { BelongsTo, Column, DataType, ForeignKey, HasOne, Model, Table } from 'sequelize-typescript';
import { Species } from '../specieses/species.model';
import { Owner } from '../owners/owners.model';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { ISpecies } from '../shared/models/interfaces/species';

@Table({ tableName: 'animals' })
export class Animal extends Model<Animal, CreateAnimalDto> {

  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING})
  birthDay: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  vaccinated: boolean;

  @Column({ type: DataType.INTEGER, allowNull: false })
  trackingId: number;

  @HasOne(() => Species)
  species: ISpecies;

  @BelongsTo(() => Owner)
  owner: Owner;

  @ForeignKey(() => Owner)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  ownerId: number;

}
