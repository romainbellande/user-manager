import { Connection, Repository } from 'typeorm';

import { User } from './models';

export const userProviders = [
  {
    provide: 'UserRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(User),
    inject: ['DbPostgresConnectionToken'],
  },
];
