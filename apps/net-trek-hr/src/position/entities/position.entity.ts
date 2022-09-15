import { ObjectType, Field } from '@nestjs/graphql';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Employee } from '../../employee/entities/employee.entity';

@ObjectType()
@Entity()
@Unique(['code'])
export class Position {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  code: string;

  @OneToMany(() => Employee, (employee) => employee.position)
  @Field(() => [Employee], { nullable: true })
  employee: Employee[];
}
