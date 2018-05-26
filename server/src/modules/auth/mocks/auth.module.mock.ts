import * as passport from 'passport';
import {
  Module,
  NestModule,
  MiddlewaresConsumer,
  RequestMethod,
} from '@nestjs/common';

import { DatabaseModule } from '../../database/database.module';
import { userProviders } from '../../user/user.providers';
import { authRoutes } from '../auth.routes';
import { JwtMiddlewareMock } from './jwt.middleware.mock';

@Module({
  modules: [DatabaseModule],
})
export class AuthModuleMock {
  public configure(consumer: MiddlewaresConsumer) {
    consumer
      .apply(JwtMiddlewareMock)
      .forRoutes(...authRoutes);
  }
}
