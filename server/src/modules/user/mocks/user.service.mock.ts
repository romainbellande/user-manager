import { Component } from '@nestjs/common';
import { userMock } from './user.mock';

@Component()
export class UserServiceMock {
  async create(): Promise<any> {
    return await new Promise(resolve => resolve(userMock));
  }

  async findById() {
    return await new Promise(resolve => resolve(userMock));
  }

  findAll = async () => userMock;
}
