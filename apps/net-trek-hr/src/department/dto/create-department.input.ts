import { InputType, Field } from '@nestjs/graphql';
import { MinLength } from 'class-validator';

@InputType()
export class CreateDepartmentInput {
  @Field()
  @MinLength(3)
  name: string;
}
