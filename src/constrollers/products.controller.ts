import {
  Controller,
  Get,
  Post,
  Param,
  Query,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  Res,
  //ParseIntPipe,
} from '@nestjs/common';
import { Response } from 'express';
import { ParseIntPipe } from '../common/parse-int.pipe';
import { ProductsService } from './../services/products.service';
import { CreateProductDto, UpdateProductDto } from './../dtos/products.dtos';
@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}
  
  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return this.productService.findAll();
  }

  @Get('filter')
  getProductFilter() {
    return { message: `Yo soy un filtro` };
  }

  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Param('productId', ParseIntPipe) productId: number) {
    return this.productService.findOne(productId);
  }
  @Post()
  create(@Body() payload: CreateProductDto) {
    return this.productService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateProductDto) {
    return this.productService.update(+id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
