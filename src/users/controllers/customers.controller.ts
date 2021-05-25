import {
  Controller,
  Param,
  ParseIntPipe,
  Get,
  Post,
  Put,
  Delete,
  Body,
} from '@nestjs/common';
import { CreateCustomerDto, UpdateCustomerDto } from '../dtos/customer.dto';
import { CustomersService } from '../services/customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {}

  @Get()
  findAll() {
    return this.customersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.customersService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateCustomerDto) {
    return this.customersService.create(payload);
  }

  @Put()
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateCustomerDto,
  ) {
    return this.customersService.update(id, payload);
  }

  @Delete()
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.customersService.remove(id);
  }
}
