import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TerminationService } from './termination.service';
import { Termination } from './entities/termination.entity';
import { CreateTerminationInput } from './dto/create-termination.input';
import { UpdateTerminationInput } from './dto/update-termination.input';

@Resolver(() => Termination)
export class TerminationResolver {
  constructor(private readonly terminationService: TerminationService) {}

  @Mutation(() => Termination, { name: 'createTermination' })
  create(@Args('termination') termination: CreateTerminationInput) {
    return this.terminationService.create(termination);
  }

  @Mutation(() => Termination)
  createTermination(@Args('termination') termination: CreateTerminationInput) {
    return this.terminationService.create({ ...termination });
  }

  @Query(() => [Termination], { name: 'termination' })
  findAll() {
    return this.terminationService.findAll();
  }

  @Query(() => Termination, { name: 'getSingleTermination' })
  findOne(@Args('id') id: string) {
    return this.terminationService.findOne(id);
  }

  @Mutation(() => Termination)
  updateTermination(
    @Args('updateTerminationInput')
    updateTerminationInput: UpdateTerminationInput
  ) {
    return this.terminationService.update(
      updateTerminationInput.id,
      updateTerminationInput
    );
  }

  @Mutation(() => Termination)
  removeTermination(@Args('id') id: string) {
    return this.terminationService.remove(id);
  }
}
