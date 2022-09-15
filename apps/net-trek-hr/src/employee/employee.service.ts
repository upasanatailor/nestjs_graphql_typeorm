import { Injectable, NotFoundException } from '@nestjs/common';
import { Args } from '@nestjs/graphql';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DepartmentService } from '../department/department.service';
import { Department } from '../department/entities/department.entity';
import { Position } from '../position/entities/position.entity';
import { PositionService } from '../position/position.service';
import { Project } from '../project/entities/project.entity';
import { ProjectService } from '../project/project.service';
import { CreateEmployeeInput } from './dto/create-employee.input';
import { UpdateEmployeeInput } from './dto/update-employee.input';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
    private departmentService: DepartmentService,
    private positionService: PositionService,
    private projectService: ProjectService
  ) {}

  async create(employee: CreateEmployeeInput): Promise<Employee> {
    try {
      const projects = await this.projectService.findByIds(employee.projectIds);
      const { projectIds, ...restObj } = employee;
      let emp = this.employeeRepository.create({ ...restObj, projects });
      return this.employeeRepository.save(emp);
    } catch {
      throw new NotFoundException();
    }
  }

  async findAll(): Promise<Employee[]> {
    return this.employeeRepository.find();
  }

  async getDepartment(id: string): Promise<Department> {
    return this.departmentService.findOne(id);
  }

  async getPosition(id: string): Promise<Position> {
    return this.positionService.findOne(id);
  }

  findOne(id: string): Promise<Employee> {
    try {
      return this.employeeRepository.findOneOrFail({
        where: {
          id: id,
        },
      });
    } catch (error) {
      throw new NotFoundException("emp doesn't exist");
    }
  }

  findProject(id: string): Promise<Employee> {
    try {
      return this.employeeRepository.findOneOrFail({
        where: {
          id: id,
        },
        relations: { projects: true },
      });
    } catch (error) {
      throw new NotFoundException("emp doesn't exist");
    }
  }

  async update(id: string, updateEmployeeInput: UpdateEmployeeInput) {
    const findEmpData = await this.employeeRepository.preload({
      id: id,
      ...updateEmployeeInput,
    });
    if (!findEmpData) {
      throw new NotFoundException(id);
    }

    return this.employeeRepository.save(findEmpData);
  }

  async remove(id: string): Promise<Employee> {
    const findEmpData = await this.employeeRepository.findOne({
      where: { id: id },
    });
    if (!findEmpData) {
      throw new NotFoundException(id);
    }

    const ret = await this.employeeRepository.delete(id);
    if (ret.affected === 1) {
      return findEmpData;
    }
  }
}
