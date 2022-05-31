import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './constrollers/products.controller';
import { CategoriesController } from './constrollers/categories.controller';
import { CustomerController } from './constrollers/customer.controller';
import { UserController } from './constrollers/user.controller';
import { BrandController } from './constrollers/brand.controller';
import { ProductsService } from './services/products.service';
import { CustomerService } from './services/customer.service';
import { UserService } from './services/user.service';
import { CategoriesService } from './services/categories.service';
import { BrandService } from './services/brand.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    ProductsController,
    CategoriesController,
    CustomerController,
    UserController,
    BrandController,
  ],
  providers: [
    AppService,
    ProductsService,
    CustomerService,
    UserService,
    CategoriesService,
    BrandService,
  ],
})
export class AppModule {}
