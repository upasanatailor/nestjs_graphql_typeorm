import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { EmployeeService } from './employee.service';
import { Employee } from './entities/employee.entity';
import { CreateEmployeeInput } from './dto/create-employee.input';
import { Department } from '../department/entities/department.entity';
import { UpdateEmployeeInput } from './dto/update-employee.input';
import { Position } from '../position/entities/position.entity';
import { Project } from '../project/entities/project.entity';
import { ConsoleLogger } from '@nestjs/common';
import { Termination } from '../termination/entities/termination.entity';

@Resolver(() => Employee)
export class EmployeeResolver {
  constructor(private employeeService: EmployeeService) {}

  @Mutation(() => Employee, { name: 'createEmployee' })
  create(@Args('employee') employee: CreateEmployeeInput) {
    return this.employeeService.create(employee);
  }

  @Query(() => [Employee], { name: 'getAllEmployee' })
  findAll() {
    return this.employeeService.findAll();
  }

  @Query(() => Employee, { name: 'getSingleEmployee' })
  findOne(@Args('id') id: string) {
    console.log('id', id);
    return this.employeeService.findOne(id);
  }

  @Mutation(() => Employee)
  removeEmployee(@Args('id', { type: () => String }) id: string) {
    return this.employeeService.remove(id);
  }

  @Mutation(() => Employee)
  updateEmployee(@Args('employee') employee: UpdateEmployeeInput) {
    console.log(employee);
    return this.employeeService.update(employee.id, employee);
  }

  @ResolveField(() => [Termination], { name: 'termination' })
  async termination(@Parent() employee: Employee) {
    return this.employeeService.getTermination(employee.id);
  }

  @ResolveField(() => [Project], { name: 'projects' })
  async projects(@Parent() { id }: Employee) {
    const getProjects = await this.employeeService.findProject(id);
    return getProjects.projects;
  }

  @ResolveField(() => Position)
  position(@Parent() employee: Employee) {
    return this.employeeService.getPosition(employee.positionId);
  }

  @ResolveField(() => Department)
  department(@Parent() employee: Employee) {
    return this.employeeService.getDepartment(employee.departmentId);
  }
}
