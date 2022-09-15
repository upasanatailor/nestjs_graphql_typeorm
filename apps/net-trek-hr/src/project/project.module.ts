import { forwardRef, Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectResolver } from './project.resolver';
import { Project } from './entities/project.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeModule } from '../employee/employee.module';

@Module({
  providers: [ProjectResolver, ProjectService],
  imports: [
    TypeOrmModule.forFeature([Project]),
    forwardRef(() => EmployeeModule),
  ],
  exports: [ProjectService],
})
export class ProjectModule {}
