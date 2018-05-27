import { Connection, Repository } from 'typeorm';

import { Customer } from './models';

export const customerProviders = [
  {
    provide: 'CustomerRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(Customer),
    inject: ['DbPostgresConnectionToken'],
  },
];
