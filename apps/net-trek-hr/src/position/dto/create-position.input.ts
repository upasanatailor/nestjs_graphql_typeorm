import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreatePositionInput {
  @Field()
  name: string;

  @Field()
  code: string;
}
