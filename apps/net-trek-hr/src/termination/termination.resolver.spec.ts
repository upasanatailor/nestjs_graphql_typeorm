import { Test, TestingModule } from '@nestjs/testing';
import { TerminationResolver } from './termination.resolver';
import { TerminationService } from './termination.service';

describe('TerminationResolver', () => {
  let resolver: TerminationResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TerminationResolver, TerminationService],
    }).compile();

    resolver = module.get<TerminationResolver>(TerminationResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
