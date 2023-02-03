import { Test, TestingModule } from '@nestjs/testing';
import { PackageDataServiceController } from './package-data-service.controller';
import { PackageDataServiceService } from './package-data-service.service';

describe('PackageDataServiceController', () => {
  let controller: PackageDataServiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PackageDataServiceController],
      providers: [PackageDataServiceService],
    }).compile();

    controller = module.get<PackageDataServiceController>(PackageDataServiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
