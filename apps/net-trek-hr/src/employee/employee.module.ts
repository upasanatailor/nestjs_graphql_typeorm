import { forwardRef, Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeResolver } from './employee.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { DepartmentModule } from '../department/department.module';
import { PositionModule } from '../position/position.module';
import { ProjectModule } from '../project/project.module';
import { TerminationModule } from '../termination/termination.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Employee]),
    DepartmentModule,
    PositionModule,
    forwardRef(() => TerminationModule),
    forwardRef(() => ProjectModule),
  ],
  providers: [EmployeeResolver, EmployeeService],
  exports: [EmployeeService],
})
export class EmployeeModule {}
