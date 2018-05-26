import { Component, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { validate } from 'class-validator';

import { Test } from './test.entity';
import { TestCreateDto } from './test-create.dto';

@Component()
export class TestService {
  constructor(@Inject('TestRepositoryToken')
              private readonly testRepository: Repository<Test>) {}

  async create(testCreate: TestCreateDto): Promise<Test> {
    const test = await this.testRepository.create(testCreate);
    const errors = await validate(test);

    if (errors.length > 0) {
      throw new HttpException(errors.toString(), HttpStatus.BAD_REQUEST);
    } else {
      return await this.testRepository.save(test)
        .catch(({message}) => {
          throw new HttpException(message, HttpStatus.BAD_REQUEST);
        });
    }
  }

  async findAll(): Promise<Test[]> {
    return await this.testRepository.find();
  }
}
