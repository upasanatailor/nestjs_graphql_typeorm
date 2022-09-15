import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDepartmentInput } from './dto/create-department.input';
import { UpdateDepartmentInput } from './dto/update-department.input';
import { Department } from './entities/department.entity';

@Injectable()
export class DepartmentService {
  constructor(
    @InjectRepository(Department)
    private departmentRepository: Repository<Department>
  ) {}
  create(department: CreateDepartmentInput) {
    let dept = this.departmentRepository.create(department);
    return this.departmentRepository.save(dept);
  }

  async findAll(): Promise<Department[]> {
    return this.departmentRepository.find({
      relations: ['employee'],
    });
  }

  async findOne(id: string): Promise<Department> {
    return this.departmentRepository.findOne({
      where: { id: id },
      relations: ['employee'],
    });
  }

  async update(id: string, updateDepartmentInput: UpdateDepartmentInput) {
    const findDeptData = await this.departmentRepository.preload({
      id: id,
      ...updateDepartmentInput,
    });
    if (!findDeptData) {
      throw new NotFoundException(id);
    }

    return this.departmentRepository.save(findDeptData);
  }

  async remove(id: string): Promise<Department> {
    const findDeptData = await this.departmentRepository.findOne({
      where: { id: id },
    });
    if (!findDeptData) {
      throw new NotFoundException(id);
    }

    const ret = await this.departmentRepository.delete(id);
    if (ret.affected === 1) {
      return findDeptData;
    }
  }
}
