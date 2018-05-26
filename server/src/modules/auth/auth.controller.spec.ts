import { Test } from '@nestjs/testing';
import { Connection, getConnection } from 'typeorm';

import { AppConfig } from '../../../../common/config';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { authMock, credentialsMock, } from './mocks';
import { databaseProviders } from '../database/database.providers';
import { userProviders } from '../user/user.providers';
import { UserDbMock } from '../user/mocks';

describe('Authcontroller', () => {
  let authController: AuthController;
  let authService: AuthService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [AuthController],
      components: [
        ...databaseProviders,
        ...userProviders,
        AuthService,
      ],
    }).compile();

    authService = module.get<AuthService>(AuthService);
    authController = module.get<AuthController>(AuthController);
    await UserDbMock.create();
  });

  afterEach((async () => {
    await UserDbMock.remove();
    getConnection().close();
  }));

  it('should get token via credentials', async () => {
    jest.spyOn(authService, 'createToken').mockImplementation(() => authMock);
    expect(await authController.getToken(credentialsMock));
  });

  it('should not get token from invalid credentials', async () => {
    jest.spyOn(authService, 'createToken').mockImplementation(() => null);
    expect(await authController.getToken(credentialsMock));
  });

  it('shoud validate a user via jwt', async () => {
    jest.spyOn(authService, 'validateUser').mockImplementation(() => true);
    expect(await authService.validateUser({id: 0}));
  });

  it('should not validate unrecognized user', async () => {
    jest.spyOn(authService, 'validateUser').mockImplementation(() => false);
    expect(await authService.validateUser({id: 1}));
  });
});
