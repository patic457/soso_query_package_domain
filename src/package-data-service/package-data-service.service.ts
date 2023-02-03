import { Injectable } from '@nestjs/common';
import { CreatePackageDataServiceDto } from './dto/create-package-data-service.dto';
import { UpdatePackageDataServiceDto } from './dto/update-package-data-service.dto';

@Injectable()
export class PackageDataServiceService {
  create(createPackageDataServiceDto: CreatePackageDataServiceDto) {
    return 'This action adds a new packageDataService';
  }

  findAll() {
    return `This action returns all packageDataService`;
  }

  findOne(id: number) {
    return `This action returns a #${id} packageDataService`;
  }

  update(id: number, updatePackageDataServiceDto: UpdatePackageDataServiceDto) {
    return `This action updates a #${id} packageDataService`;
  }

  remove(id: number) {
    return `This action removes a #${id} packageDataService`;
  }
}
