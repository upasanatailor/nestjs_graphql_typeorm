import { InputType, Field } from '@nestjs/graphql';
import {
  IsEmail,
  IsDate,
  MinLength,
  Length,
  IsNotEmpty,
  IsString,
} from 'class-validator';

@InputType()
export class CreateEmployeeInput {
  @Field()
  @IsEmail()
  email: string;

  @Field()
  @MinLength(3)
  firstName: string;

  @Field({ nullable: true })
  lastName: string;

  @Field({ nullable: true })
  joining_start_date: string;

  @Field({ nullable: true })
  date_of_birth: string;

  @Field({ nullable: true })
  @Length(10, 20)
  mobile_phone: string;

  @Field({ nullable: true })
  @Length(10, 20)
  work_phone: string;

  @Field({ nullable: true })
  @Length(10, 20)
  home_phone: string;

  @Field({ nullable: true })
  gender: string;

  @Field()
  @MinLength(3)
  street_first: String;

  @Field({ nullable: true })
  street_second: String;

  @Field()
  city: string;

  @Field({ nullable: true })
  employee_number: string;

  @Field({ nullable: true })
  employee_status: string;

  @Field({ nullable: true })
  positionId: string;

  @Field({ nullable: true })
  departmentId: string;

  @Field(() => [String])
  @IsNotEmpty()
  @IsString({ each: true })
  projectIds: string[];
}
