import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTerminationInput {
  @Field()
  date: string;

  @Field()
  status: Boolean;

  @Field()
  employeeId: string;
}
