import { Module } from '@nestjs/common';
import { PackageDataServiceService } from './package-data-service.service';
import { PackageDataServiceController } from './package-data-service.controller';

@Module({
  controllers: [PackageDataServiceController],
  providers: [PackageDataServiceService]
})
export class PackageDataServiceModule {}
