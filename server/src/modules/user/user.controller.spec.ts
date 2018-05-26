import { Test } from '@nestjs/testing';
import { Connection, getConnection } from 'typeorm';

import { UserController } from './user.controller';
import { UserService } from './user.service';
import { userCreateMock, userMock } from './mocks';
import { databaseProviders } from '../database/database.providers';
import { userProviders } from './user.providers';

describe('UserController', () => {
  let userController: UserController;
  let userService: UserService;
  let connection: Connection;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
        controllers: [UserController],
        components: [
          ...userProviders,
          ...databaseProviders,
          UserService,
        ],
      }).compile();

    userService = module.get<UserService>(UserService);
    userController = module.get<UserController>(UserController);
  });

  afterEach(async () => {
    connection = getConnection();
    connection.close();
  });

  it('should create user and return it', async () => {
    jest.spyOn(userService, 'create').mockImplementation(() => userMock);
    expect(await userController.create(userCreateMock));
  });

  it('should get user informations', async () => {
    jest.spyOn(userService, 'findById').mockImplementation(() => userMock);
    expect(await userController.find({user: { id: 0 }}));
  });
});
