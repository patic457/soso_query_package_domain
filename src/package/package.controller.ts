import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PackageService } from './package.service';
import axios from 'axios';


@Controller('api/package')
export class PackageController {
  constructor(private readonly packageService: PackageService) { }

  // @Post()
  // create(@Body() createPackageDto: CreatePackageDto) {
  //   return this.packageService.create(createPackageDto);
  // }

  // @Get()
  // findAll() {
  //   return this.packageService.findAll();
  // }

  @Get('/packagecatalog/prisma')
  async getCatalogPrisma() {
    try {
      // const productCatalogResponse = this.packageService.findAllPrisma;

      // return productCatalogResponse;
    } catch (error) {
    }
  }

  @Get('/packagecatalog')
  async getCatalog() {
    const url = "https://patic457.000webhostapp.com/api/getcatalog.php";
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {

    }
  }


  // @Get(':id')
  // findOne(@Param('id') id: string) {

  // return this.packageService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatePackageDto: UpdatePackageDto) {
  //   return this.packageService.update(+id, updatePackageDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.packageService.remove(+id);
  // }
}
