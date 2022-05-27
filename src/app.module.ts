import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './constrollers/products.controller';
import { CategoriesController } from './constrollers/categories.controller';
import { CustomerController } from './constrollers/customer.controller';
import { UserController } from './constrollers/user.controller';
import { OrderController } from './constrollers/order.controller';
import { BrandController } from './constrollers/brand.controller';
import { ProductsService } from './services/products.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    ProductsController,
    CategoriesController,
    CustomerController,
    UserController,
    OrderController,
    BrandController,
  ],
  providers: [AppService, ProductsService],
})
export class AppModule {}
