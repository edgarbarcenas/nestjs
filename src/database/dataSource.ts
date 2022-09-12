import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';

config();

const configService = new ConfigService();
export const connectionSource = new DataSource({
  type: 'postgres',
  host: configService.get('POSTGRES_HOST'),
  username: configService.get('POSTGRES_USER'),
  password: configService.get('POSTGRES_PASSWORD'),
  port: Number(configService.get('POSTGRES_PORT')),
  database: configService.get('POSTGRES_DB'),
  logging: true,
  synchronize: false,
  entities: ['src/*/*/*.entity.ts'],
  migrations: ['src/database/migrations/*.ts'],
});
