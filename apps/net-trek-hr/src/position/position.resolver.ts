import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PositionService } from './position.service';
import { Position } from './entities/position.entity';
import { CreatePositionInput } from './dto/create-position.input';
import { UpdatePositionInput } from './dto/update-position.input';

@Resolver(() => Position)
export class PositionResolver {
  constructor(private positionService: PositionService) {}

  @Mutation(() => Position, { name: 'createPosition' })
  create(@Args('position') position: CreatePositionInput) {
    return this.positionService.create(position);
  }

  @Query(() => [Position], { name: 'getAllPosition' })
  findAll() {
    return this.positionService.findAll();
  }

  @Query(() => Position, { name: 'position' })
  findOne(@Args('id') id: string) {
    console.log('posid', id);
    return this.positionService.findOne(id);
  }

  @Mutation(() => Position)
  updatePosition(
    @Args('updatePositionInput') updatePositionInput: UpdatePositionInput
  ) {
    return this.positionService.update(
      updatePositionInput.id,
      updatePositionInput
    );
  }

  @Mutation(() => Position)
  removePosition(@Args('id') id: string) {
    return this.positionService.remove(id);
  }
}
