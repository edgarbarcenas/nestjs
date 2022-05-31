import { NestFactory } from '@nestjs/core';
import {  ValidationPipe } from '@nestjs/common'
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,//Ignorar propiedad extra y sacarlas del objeto
    forbidNonWhitelisted: true,//Alertar propiedad extra
  }));
  await app.listen(3000);
}
bootstrap();
