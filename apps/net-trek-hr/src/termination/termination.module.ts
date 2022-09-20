import { forwardRef, Module } from '@nestjs/common';
import { TerminationService } from './termination.service';
import { TerminationResolver } from './termination.resolver';
import { Termination } from './entities/termination.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeModule } from '../employee/employee.module';

@Module({
  providers: [TerminationResolver, TerminationService],
  imports: [
    TypeOrmModule.forFeature([Termination]),
    forwardRef(() => EmployeeModule),
  ],
  exports: [TerminationService],
})
export class TerminationModule {}
