import { Injectable } from '@nestjs/common';
import { Product } from './../Entities/product.entity';

@Injectable()
export class ProductsService {
    private counterId: number;
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'short description about product',
      price: 40000,
      stock: 20,
      image: '',
    },
  ];
  findAll() {
    return this.products;
  }

  findOne(id: number) {
    return this.products.find((item) => item.id === id);
  }
  create(payload: any) {
    this.counterId = this.counterId + 1;
    const newProduct = {
        id: this.counterId,
        ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }
}
