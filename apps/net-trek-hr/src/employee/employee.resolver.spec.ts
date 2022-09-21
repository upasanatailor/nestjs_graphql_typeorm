import { Test, TestingModule } from '@nestjs/testing';
import { ProjectService } from '../project/project.service';
import { CreateEmployeeInput } from './dto/create-employee.input';
import { EmployeeResolver } from './employee.resolver';
import { EmployeeService } from './employee.service';

describe('EmployeeResolver', () => {
  let resolver: EmployeeResolver;
  let empMockService: EmployeeService;

  let createDto = new CreateEmployeeInput();
  createDto.firstName = 'David';
  createDto.lastName = 'Dawan';

  const employeeService = {
    create: jest.fn((employee) => {
      return {
        id: 'dupl-emp-id',
        ...createDto,
      };
    }),
  };
  const projectResolver = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EmployeeResolver,
        { provide: EmployeeService, useValue: employeeService },
        { provide: ProjectService, useValue: projectResolver },
      ],
    }).compile();

    resolver = module.get<EmployeeResolver>(EmployeeResolver);
    empMockService = module.get<EmployeeService>(EmployeeService);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
  it('should create function ', () => {
    expect(resolver.create).toBeDefined();
  });
  it('should create emp and return with id', () => {
    expect(resolver.create(createDto)).toEqual({
      id: 'dupl-emp-id',
      ...createDto,
    });
    expect(empMockService.create).toBeCalled();
  });
});
