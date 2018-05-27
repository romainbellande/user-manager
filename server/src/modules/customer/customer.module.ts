import { Module } from '@nestjs/common';

import { DatabaseModule } from '../database/database.module';

import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';
import { customerProviders } from './customer.providers';

@Module({
  modules: [
    DatabaseModule,
  ],
  controllers: [CustomerController],
  components: [
    CustomerService,
    ...customerProviders,
  ],
})
export class CustomerModule {}
