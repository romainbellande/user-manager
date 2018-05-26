import { Module } from '@nestjs/common';

import { DatabaseModule } from '../database/database.module';
import { TestController } from './test.controller';
import { Test } from './test.entity';
import { testProviders } from './test.providers';
import { TestService } from './test.service';

@Module({
  modules: [DatabaseModule],
  controllers: [TestController],
  components: [
    TestService,
    ...testProviders,
  ],
})
export class TestModule {}
