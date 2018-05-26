import { Module, MiddlewaresConsumer, RequestMethod } from '@nestjs/common';

import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { TestModule } from './test/test.module';

@Module({
  modules: [
    UserModule,
    AuthModule,
    TestModule,
  ],
})
export class ApplicationModule {}
