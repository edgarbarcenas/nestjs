import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get('/:id/products/:productId')
  getCategory(@Param('productId') productId: string, @Param('id') id: string) {
    return { message: `Product id: ${productId} and category id: ${id}` };
  }
}