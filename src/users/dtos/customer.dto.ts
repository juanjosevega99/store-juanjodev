import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsPhoneNumber, IsString } from 'class-validator';

export class CreateCustomerDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly lastName: string;

  @IsPhoneNumber()
  @IsNotEmpty()
  readonly phone: string;
}

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {}
