import { CreateTerminationInput } from './create-termination.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTerminationInput extends PartialType(
  CreateTerminationInput
) {
  @Field()
  id: string;
}
