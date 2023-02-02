import { Injectable } from '@nestjs/common';

import axios from 'axios';
import { Package } from './entities/package.entity';
import { Observable } from 'rxjs';


const getCatalogUrl = "https://patic457.000webhostapp.com/api/getcatalog.php";
const getCategorygUrl = "https://patic457.000webhostapp.com/api/getcategory.php";
const getCategorygUrl2 = "https://patic457.000webhostapp.com/api/getcategory.php";

@Injectable()
export class PackageService {

  // findAll() {
  //   return `This action returns all package`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} package`;
  // }

  async findAll() {


    try {
      const packageModel = new Package();
      const response = await axios.get(getCatalogUrl).
      return response;
    } catch (error) {

    }




  }
}