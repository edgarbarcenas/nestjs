import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('brands')
@Controller('brand')
export class BrandsController {
  @Get()
  getBrand() {
    return { message: `Yo soy la marca` };
  }
}
