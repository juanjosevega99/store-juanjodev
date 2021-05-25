import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dtos';
import { ProductsService } from '../services/products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getAll(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return this.productsService.getAll();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateProductDto) {
    return this.productsService.create(payload);
  }

  @Put()
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateProductDto,
  ) {
    return this.productsService.update(id, payload);
  }

  @Delete()
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.remove(id);
  }
}
