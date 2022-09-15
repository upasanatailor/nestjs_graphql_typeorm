import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  Entity,
} from 'typeorm';
import { Employee } from '../../employee/entities/employee.entity';

@ObjectType()
@Entity()
export class Project {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  status: Boolean;

  @Field(() => [Employee], { nullable: true })
  @ManyToMany(() => Employee, (employee) => employee.projects)
  @JoinTable()
  employess: Employee[];
}
