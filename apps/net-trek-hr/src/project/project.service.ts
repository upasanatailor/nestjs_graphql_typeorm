import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsUtils, In, Repository } from 'typeorm';
import { CreateProjectInput } from './dto/create-project.input';
import { UpdateProjectInput } from './dto/update-project.input';
import { Project } from './entities/project.entity';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private projectRepository: Repository<Project>
  ) {}
  create(project: CreateProjectInput) {
    let proj = this.projectRepository.create(project);
    return this.projectRepository.save(proj);
  }

  async findAll(): Promise<Project[]> {
    return this.projectRepository.find({
      relations: ['employee'],
    });
  }

  findByIds(projectIds: string[]): Promise<Project[]> {
    const projects = this.projectRepository.findBy({ id: In(projectIds) });
    console.log('projectI', projects);
    return projects;
  }

  async findOne(id: string): Promise<Project> {
    return this.projectRepository.findOne({
      where: { id: id },
      relations: ['employee'],
    });
  }

  update(id: string, updateProjectInput: UpdateProjectInput) {
    return `This action updates a #${id} project`;
  }

  remove(id: string) {
    return `This action removes a #${id} project`;
  }
}
