import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { DepartmentService } from '../department/department.service';
import { Position } from '../position/entities/position.entity';
import { PositionService } from '../position/position.service';
import { ProjectService } from '../project/project.service';
import { TerminationService } from '../termination/termination.service';
import { EmployeeService } from './employee.service';
import { Employee } from './entities/employee.entity';

describe('EmployeeService', () => {
  let service: EmployeeService;
  let mockPosition = new Position();
  (mockPosition.name = 'Developer'), (mockPosition.code = 'dev');

  let positionService = {
    findOne: jest.fn((id) => {
      return { id: id, ...mockPosition };
    }),
  };

  let projectService = {};

  let departmentService = {};
  let employeeRepository = {};
  let terminationService = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EmployeeService,
        { provide: getRepositoryToken(Employee), useValue: employeeRepository },
        {
          provide: ProjectService,
          useValue: projectService,
        },
        {
          provide: PositionService,
          useValue: positionService,
        },
        {
          provide: DepartmentService,
          useValue: departmentService,
        },
        {
          provide: TerminationService,
          useValue: terminationService,
        },
      ],
    }).compile();

    service = module.get<EmployeeService>(EmployeeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should find a position for a given id', () => {
    expect(
      service.getPosition('dupl-id').then((position) => {
        expect(position.id).toEqual('dupl-id');
      })
    );
  });

  // it('should create a create a new employee',()=>{
  // service.create(create)
  //})
});
