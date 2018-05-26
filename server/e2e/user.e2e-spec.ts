import * as express from 'express';
import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { getConnection } from 'typeorm';

import { UserModule } from '../src/modules/user/user.module';
import { UserService } from '../src/modules/user/user.service';
import { userDbMock, UserServiceMock, userCreateMock, userMock } from '../src/modules/user/mocks';
import { AuthModuleMock } from '../src/modules/auth/mocks';

describe('Users', () => {
  const server = express();
  let app: INestApplication;
  let userService: UserService;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
        imports: [
          AuthModuleMock,
          UserModule,
        ],
      })
      .overrideComponent(UserService).useClass(UserServiceMock)
      .compile();

    await userDbMock();
    app = module.createNestApplication(server);
    await app.init();
    userService = module.get<UserService>(UserService);
  });

  afterAll(() => {
    getConnection().close();
    app.close();
  });

  it(`/POST users`, (done) => {
    return request(server)
    .post('/users')
      .send(userCreateMock)
      .expect(201, userMock, done);
  });

  it('/GET users n°0', (done) => {
    return request(server)
    .get('/users/me')
    .expect(200, userMock, done);
  });
});
