import { Module } from '@nestjs/common';
import { HttpModule, HttpService } from '@nestjs/axios';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { async } from 'rxjs';
import { DatabaseModule } from './database/database.module';

const API_KEY = '12345634';
const API_KEY_PROD = 'PROD12345634';

@Module({
  imports: [HttpModule, UsersModule, ProductsModule, DatabaseModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'TASK',
      useFactory: async (http: HttpService) => {
        const taks = await http
          .get('https://jsonplaceholder.typicode.com/users/1/todos')
          .toPromise();
        return taks.data;
      },
      inject: [HttpService],
    },
  ],
})
export class AppModule {}
