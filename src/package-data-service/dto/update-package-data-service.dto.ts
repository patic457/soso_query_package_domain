import { PartialType } from '@nestjs/swagger';
import { CreatePackageDataServiceDto } from './create-package-data-service.dto';

export class UpdatePackageDataServiceDto extends PartialType(CreatePackageDataServiceDto) {}
