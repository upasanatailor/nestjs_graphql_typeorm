import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeModule } from '../employee/employee.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { DepartmentModule } from '../department/department.module';
import { Employee } from '../employee/entities/employee.entity';
import { Department } from '../department/entities/department.entity';
import { PositionModule } from '../position/position.module';
import { Position } from '../position/entities/position.entity';
import { ProjectModule } from '../project/project.module';
import { Project } from '../project/entities/project.entity';
import { TerminationModule } from '../termination/termination.module';
import { Termination } from '../termination/entities/termination.entity';

@Module({
  imports: [
    EmployeeModule,
    DepartmentModule,
    PositionModule,
    ProjectModule,
    TerminationModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'netTrekHR',
      entities: [Employee, Department, Position, Project, Termination],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
