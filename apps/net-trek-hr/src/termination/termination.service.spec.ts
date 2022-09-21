import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Termination } from './entities/termination.entity';
import { TerminationService } from './termination.service';

describe('TerminationService', () => {
  let service: TerminationService;
  let terminationRepository = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TerminationService,
        {
          provide: getRepositoryToken(Termination),
          useValue: terminationRepository,
        },
      ],
    }).compile();

    service = module.get<TerminationService>(TerminationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
