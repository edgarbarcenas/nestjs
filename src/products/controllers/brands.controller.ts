import { Controller, Get } from '@nestjs/common';

@Controller('brand')
export class BrandsController {
  @Get()
  getBrand() {
    return { message: `Yo soy la marca` };
  }
}
