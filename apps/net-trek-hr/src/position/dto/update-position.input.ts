import { CreatePositionInput } from './create-position.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePositionInput extends PartialType(CreatePositionInput) {
  @Field()
  id: string;
}
