import { Test, TestingModule } from '@nestjs/testing';
import { TerminationResolver } from './termination.resolver';
import { TerminationService } from './termination.service';

describe('TerminationResolver', () => {
  let resolver: TerminationResolver;
  const terminationService = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TerminationResolver,
        { provide: TerminationService, useValue: terminationService },
      ],
    }).compile();

    resolver = module.get<TerminationResolver>(TerminationResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
