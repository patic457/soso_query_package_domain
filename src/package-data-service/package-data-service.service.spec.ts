import { Test, TestingModule } from '@nestjs/testing';
import { PackageDataServiceService } from './package-data-service.service';

describe('PackageDataServiceService', () => {
  let service: PackageDataServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PackageDataServiceService],
    }).compile();

    service = module.get<PackageDataServiceService>(PackageDataServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
