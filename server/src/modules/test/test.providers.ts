import { Connection, Repository } from 'typeorm';

import { Test } from './test.entity';

export const testProviders = [
  {
    provide: 'TestRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(Test),
    inject: ['DbPostgresConnectionToken'],
  },
];
