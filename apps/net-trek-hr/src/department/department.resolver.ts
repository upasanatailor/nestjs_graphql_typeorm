import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DepartmentService } from './department.service';
import { Department } from './entities/department.entity';
import { CreateDepartmentInput } from './dto/create-department.input';
import { UpdateDepartmentInput } from './dto/update-department.input';

@Resolver(() => Department)
export class DepartmentResolver {
  constructor(private departmentService: DepartmentService) {}

  @Mutation(() => Department, { name: 'createDepartment' })
  create(@Args('department') department: CreateDepartmentInput) {
    return this.departmentService.create(department);
  }

  @Query(() => [Department], { name: 'getAllDepartment' })
  findAll() {
    return this.departmentService.findAll();
  }

  @Query(() => Department, { name: 'department' })
  findOne(@Args('id') id: string) {
    return this.departmentService.findOne(id);
  }

  @Mutation(() => Department)
  updateDepartment(
    @Args('updateDepartmentInput') updateDepartmentInput: UpdateDepartmentInput
  ) {
    return this.departmentService.update(
      updateDepartmentInput.id,
      updateDepartmentInput
    );
  }

  @Mutation(() => Department)
  removeDepartment(@Args('id') id: string) {
    return this.departmentService.remove(id);
  }
}
