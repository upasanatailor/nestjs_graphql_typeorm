import { Test, TestingModule } from '@nestjs/testing';
import { ProjectResolver } from './project.resolver';
import { ProjectService } from './project.service';

describe('ProjectResolver', () => {
  let resolver: ProjectResolver;
  const projectService = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProjectResolver,
        { provide: ProjectService, useValue: projectService },
      ],
    }).compile();

    resolver = module.get<ProjectResolver>(ProjectResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
