import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Employee } from '../../employee/entities/employee.entity';

@ObjectType()
@Entity()
export class Termination {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  status: Boolean;

  @Field()
  @Column()
  date: string;

  @OneToOne(() => Employee, (employee) => employee.termination)
  @JoinColumn()
  employee: Employee;
}
