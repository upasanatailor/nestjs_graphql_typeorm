import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Position } from './entities/position.entity';
import { PositionService } from './position.service';

describe('PositionService', () => {
  let service: PositionService;
  let positionRepository = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PositionService,
        { provide: getRepositoryToken(Position), useValue: positionRepository },
      ],
    }).compile();

    service = module.get<PositionService>(PositionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
