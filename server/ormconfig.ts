import { ConnectionOptions } from 'typeorm';

export const ORM_CONFIG: ConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'bindex',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
};
