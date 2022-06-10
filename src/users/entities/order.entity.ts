import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

import { Product } from './../../products/entities/product.entity';
import { User } from './user.entity';

@Entity('orders')
export class Order {
  date: Date;
  user: User;
  products: Product[];
}
