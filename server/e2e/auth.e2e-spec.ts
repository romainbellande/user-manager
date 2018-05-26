import * as express from 'express';
import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { getConnection } from 'typeorm';

import { AuthModule } from '../src/modules/auth/auth.module';
import { AuthService } from '../src/modules/auth/auth.service';
import { AuthServiceMock, credentialsMock, authMock} from '../src/modules/auth/mocks';
import { UserDbMock } from '../src/modules/user/mocks';

describe('Auth', () => {
  const server = express();
  let app: INestApplication;
  let authService: AuthService;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [AuthModule],
    })
    .overrideComponent(AuthService).useClass(AuthServiceMock)
    .compile();

    await UserDbMock.create();
    app = module.createNestApplication(server);
    await app.init();
    authService = module.get<AuthService>(AuthService);
  });

  afterAll(async () => {
    await UserDbMock.remove();
    getConnection().close();
    app.close();
  });

  it(`/POST auth/token`, (done) => {
    return request(server)
    .post('/auth/token')
      .send(credentialsMock)
      .expect(201, authMock, done);
  });
});
