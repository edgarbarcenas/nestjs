import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
 
import { Product } from './../entities/product.entity';
import { CreateProductDto, UpdateProductDto } from './../dtos/products.dto';

@Injectable()
export class ProductsService {
  constructor( @InjectRepository(Product) private productRepo:Repository<Product> ) 
  {}

  findAll() {
    return this.productRepo.find();
  }

  async findOne(id: number) {
    const product = await this.productRepo.findOneBy({ id: id });
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }

   create(data: CreateProductDto) {
    const newProduct = this.productRepo.create(data);
     return this.productRepo.save(newProduct);
   }

   async update(id: number, changes: UpdateProductDto) {
    const product = await this.productRepo.findOneBy({ id: id });
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }else{
      this.productRepo.merge(product, changes);
      return this.productRepo.save(product);
    }
   }

  async remove(id: number) {
    const product = await this.productRepo.findOneBy({ id: id });
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return this.productRepo.delete(id);
  }
}
