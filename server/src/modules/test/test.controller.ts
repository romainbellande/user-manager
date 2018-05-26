import { Controller, Body, Get, Post, HttpException, HttpStatus, Logger, UseFilters } from '@nestjs/common';
import { ApiResponse, ApiUseTags } from '@nestjs/swagger';

import { HttpExceptionFilter } from '../../filters';
import { TestCreateDto } from './test-create.dto';
import { Test } from './test.entity';
import { TestService } from './test.service';

@ApiUseTags('test')
@Controller('/tests')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Post()
  @ApiResponse({ status: HttpStatus.CREATED, description: 'test successfully created' })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'test bad request' })
  async create(@Body() testCreate: TestCreateDto): Promise<Test> {
    return this.testService.create(testCreate);
  }

  @Get()
  async findAll(): Promise<Test[]> {
    return this.testService.findAll();
  }
}
