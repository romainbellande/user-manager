import { Component, Inject, Body, Param, HttpException, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { validate } from 'class-validator';

import { Customer, CustomerCreateDto } from './models';

@Component()
export class CustomerService {
  constructor(@Inject('CustomerRepositoryToken')
              private readonly customerRepository: Repository<Customer>) {}

  async create(customerCreate: CustomerCreateDto): Promise<Customer> {
    const customer = this.customerRepository.create(customerCreate);
    const errors = await validate(customer);
    if (errors.length > 0) {
      throw new HttpException(errors.toString(), HttpStatus.BAD_REQUEST);
    } else {
      return this.customerRepository.save(customer)
      .then((customerCreated) => customerCreated)
      .catch(({message}) => {
        throw new HttpException(message, HttpStatus.BAD_REQUEST);
      });
    }
  }

  async findById(customerId: number): Promise<Customer> {
    return await this.customerRepository.findOneById(customerId)
    .catch((message) => {
      throw new HttpException(message, HttpStatus.UNAUTHORIZED);
    });
  }

  async findAll(): Promise<Customer[]> {
    return await this.customerRepository.find();
  }
}
