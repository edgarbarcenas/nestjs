import { Injectable, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { Client } from 'pg';

import config from './config';

@Injectable()
export class AppService {
  constructor(
    @Inject('PG') private clientPg: Client,
    @Inject('TASK') private task: any[],
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}
  getHello(): string {
    const api = this.configService.apiKey;
    const db = this.configService.database.name;
    return `Hello World! api:${api} db: ${db}`;
  }

  async getTask() {
    try {
      const query = 'SELECT * FROM tasks';
      const result = await this.clientPg.query(query);
      return result.rows;
    } catch (e) {
      console.log(e);
    }
  }
}
