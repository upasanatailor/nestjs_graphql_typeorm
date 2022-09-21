import { Test, TestingModule } from '@nestjs/testing';
import { PositionResolver } from './position.resolver';
import { PositionService } from './position.service';

describe('PositionResolver', () => {
  let resolver: PositionResolver;
  const positionService = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PositionResolver,
        { provide: PositionService, useValue: positionService },
      ],
    }).compile();

    resolver = module.get<PositionResolver>(PositionResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
