import { Module, MiddlewaresConsumer, RequestMethod } from '@nestjs/common';

import { UserModule } from './user';
import { AuthModule } from './auth';
import { CustomerModule } from './customer';
import { TestModule } from './test';

@Module({
  modules: [
    UserModule,
    CustomerModule,
    AuthModule,
    TestModule,
  ],
})
export class ApplicationModule {}
