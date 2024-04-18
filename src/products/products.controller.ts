import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  constructor() {}

  @Post()
  createProduct() {
    return 'This action adds a new product';
  }

  @Get()
  findAllProducts() {
    return 'This action returns all products';
  }

  @Get(':id')
  findProductById(@Param('id') id: string){
    return 'This action returns a product';
  }

  @Patch(':id')
  updateProduct(@Param('id') id: string, @Body('id') body: any) {
    return 'This action updates a product';
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    return 'This action removes a product';
  }


}
