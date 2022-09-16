import { ObjectType, Field } from '@nestjs/graphql';
import { IsDate, IsEmail, Length } from 'class-validator';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Department } from '../../department/entities/department.entity';
import { Position } from '../../position/entities/position.entity';
import { Project } from '../../project/entities/project.entity';

@ObjectType()
@Entity()
@Unique(['email', 'employee_number', 'work_phone'])
export class Employee {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  firstName: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  lastName: string;

  @Field()
  @Column()
  email: string;

  @Field()
  @Column({ nullable: true, type: 'date' })
  joining_start_date: string;

  @Field()
  @Column({ nullable: true })
  date_of_birth: string;

  @Field()
  @Column({ nullable: true })
  mobile_phone: string;

  @Field()
  @Column({ nullable: true })
  work_phone: string;

  @Field()
  @Column({ nullable: true })
  home_phone: string;

  @Field()
  @Column()
  gender: string;

  @Field()
  @Column({ nullable: true })
  street_first: String;

  @Field()
  @Column({ nullable: true })
  street_second: String;

  @Field()
  @Column()
  city: string;

  @Field()
  @Column()
  employee_number: string;

  @Field()
  @Column()
  employee_status: Boolean;

  @ManyToOne(() => Position, (position) => position.employee)
  @Field(() => Position, { nullable: true })
  position: Position;
  @Field({ nullable: true })
  @Column({ nullable: true })
  positionId: string;

  @ManyToOne(() => Department, (department) => department.employee)
  @Field(() => Department, { nullable: true })
  department: Department;
  @Field({ nullable: true })
  @Column({ nullable: true })
  departmentId: string;

  @Field(() => [Project], { nullable: true })
  @ManyToMany(() => Project, (project) => project.employess, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  projects: Project[];
}
