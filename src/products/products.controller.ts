import { Body, Controller, Delete, Get, Inject, Param, Patch, Post, Query } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { PaginationDto } from 'src/common';
import { PRODUCT_SERVICE } from 'src/config';

@Controller('products')
export class ProductsController {
  constructor(
    @Inject(PRODUCT_SERVICE) private readonly productsClient: ClientProxy
  ) {}

  @Post()
  createProduct() {
    return 'This action adds a new product';
  }

  @Get()
  findAllProducts(@Query() paginatioDto: PaginationDto) {
    return this.productsClient.send({ cmd: 'find_all_products' }, {...paginatioDto});
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
