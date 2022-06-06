import { Injectable, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import config from './config';
@Injectable()
export class AppService {
  constructor(
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}
  getHello(): string {
    const api = this.configService.apiKey;
    const db = this.configService.database.name;
    return `Hello World! api:${api} db: ${db}`;
  }
}
