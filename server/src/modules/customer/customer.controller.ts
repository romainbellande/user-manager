import { Controller, Get, Post, Body, Param, Req, HttpStatus, HttpException } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiUseTags, ApiBearerAuth } from '@nestjs/swagger';

import { AppConfig } from '../../../../common/config';
import { CustomerService } from './customer.service';
import { Customer, CustomerCreateDto } from './models';
import { CustomerEndpoints } from '../common';

@Controller(CustomerEndpoints.ROOT)
@ApiUseTags('customer')
@ApiBearerAuth()
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  @ApiOperation({ title: 'Create a new customer' })
  @ApiResponse({ status: HttpStatus.CREATED, description: 'customer successfully created', type: Customer })
  async create(@Body() customer: CustomerCreateDto): Promise<Customer> {
    return this.customerService.create(customer);
  }

  @Get(':customerId')
  @ApiOperation({ title: 'Get customer information' })
  @ApiResponse({ status: HttpStatus.OK, description: 'success', type: Customer })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'unauthorized' })
  async find(@Req() req): Promise<Customer> {
    return this.customerService.findById(req.customerId);
  }

  @Get()
  @ApiOperation({ title: 'Get all customers' })
  @ApiResponse({ status: HttpStatus.OK, description: 'success', type: Customer, isArray: true })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'unauthorized' })
  async findAll(): Promise<Customer[]> {
    return this.customerService.findAll();
  }
}
