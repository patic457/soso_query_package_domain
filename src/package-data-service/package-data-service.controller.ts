import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PackageDataServiceService } from './package-data-service.service';
import { CreatePackageDataServiceDto } from './dto/create-package-data-service.dto';
import { UpdatePackageDataServiceDto } from './dto/update-package-data-service.dto';

@Controller('package-data-service')
export class PackageDataServiceController {
  constructor(private readonly packageDataServiceService: PackageDataServiceService) {}

  @Post()
  create(@Body() createPackageDataServiceDto: CreatePackageDataServiceDto) {
    return this.packageDataServiceService.create(createPackageDataServiceDto);
  }

  @Get()
  findAll() {
    return this.packageDataServiceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.packageDataServiceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePackageDataServiceDto: UpdatePackageDataServiceDto) {
    return this.packageDataServiceService.update(+id, updatePackageDataServiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.packageDataServiceService.remove(+id);
  }
}
