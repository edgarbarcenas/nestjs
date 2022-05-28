import { Controller, Get } from '@nestjs/common';

@Controller('customer')
export class CustomerController {
  @Get()
  getCustomer() {
    return { message: `Yo soy el cliente` };
  }
}
